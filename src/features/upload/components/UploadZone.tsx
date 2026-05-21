"use client";

import { useRef, useState } from "react";
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function UploadZone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "preview" | "uploading" | "done" | "error">("idle");

  const handleFile = (f: File) => {
    if (!f.name.endsWith(".xlsx") && !f.name.endsWith(".xls")) {
      setStatus("error");
      return;
    }
    setFile(f);
    setStatus("preview");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Upload file Excel tuần mới</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div
          className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center gap-3 cursor-pointer hover:bg-muted/30 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const f = e.dataTransfer.files[0];
            if (f) handleFile(f);
          }}
        >
          <Upload className="size-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            Kéo thả file Excel vào đây hoặc{" "}
            <span className="text-primary underline">chọn file</span>
          </p>
          <p className="text-xs text-muted-foreground">.xlsx, .xls — tối đa 10MB</p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />

        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="size-4" />
            File không hợp lệ — chỉ chấp nhận .xlsx hoặc .xls
          </div>
        )}

        {status === "preview" && file && (
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="size-8 text-green-600" />
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setStatus("uploading");
                // TODO: call /api/upload
                setTimeout(() => setStatus("done"), 1500);
              }}
            >
              Xác nhận upload
            </Button>
          </div>
        )}

        {status === "done" && (
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle2 className="size-4" />
            Upload thành công! Dữ liệu đã được lưu.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
