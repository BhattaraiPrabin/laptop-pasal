"use client"

import * as React from "react"
import { useDropzone } from "react-dropzone"
import { X, Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type FileWithPreview = File & {
  preview: string
}

interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: FileWithPreview[]
  onChange?: (files: FileWithPreview[]) => void
  onRemove?: (file: FileWithPreview) => void
  maxFiles?: number
  maxSize?: number
  accept?: Record<string, string[]>
  disabled?: boolean
}

export function FileUpload({
  value = [],
  onChange,
  onRemove,
  maxFiles = 5,
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = {
    "image/*": [".png", ".jpg", ".jpeg", ".heic"],
  },
  disabled = false,
  className,
  ...props
}: FileUploadProps) {
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ) as FileWithPreview[]

        if (onChange) {
          if (value.length + newFiles.length > maxFiles) {
            const availableSlots = Math.max(0, maxFiles - value.length)
            onChange([...value, ...newFiles.slice(0, availableSlots)])
          } else {
            onChange([...value, ...newFiles])
          }
        }
      }
    },
    [value, onChange, maxFiles],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize,
    maxFiles: maxFiles - value.length,
    disabled,
  })

  // Clean up previews when component unmounts
  React.useEffect(() => {
    return () => {
      value.forEach((file) => URL.revokeObjectURL(file.preview))
    }
  }, [value])

  const handleRemove = (file: FileWithPreview) => {
    if (onRemove) {
      onRemove(file)
    } else if (onChange) {
      onChange(value.filter((f) => f !== file))
    }
    URL.revokeObjectURL(file.preview)
  }

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center transition-colors",
          isDragActive && "border-primary/50 bg-primary/5",
          disabled && "cursor-not-allowed opacity-60",
          "hover:border-primary/50",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {isDragActive ? "Drop the files here" : "Drag and drop files here, or click to browse"}
          </p>
          <Button variant="outline" size="sm" disabled={disabled} type="button">
            Upload Photos
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Max {maxFiles} photos. JPG, PNG or HEIC format. Max {Math.round(maxSize / 1024 / 1024)}MB each.
          </p>
        </div>
      </div>

      {value.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {value.map((file) => (
            <div key={file.name} className="relative group rounded-md overflow-hidden border">
              <img
                src={file.preview || "/placeholder.svg"}
                alt={file.name}
                className="h-24 w-full object-cover"
                onLoad={() => {
                  URL.revokeObjectURL(file.preview)
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white" onClick={() => handleRemove(file)}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs truncate px-2 py-1">
                {file.name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
