import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileSpreadsheet, Download, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExcelUploadProps {
  onClose: () => void;
}

export const ExcelUpload = ({ onClose }: ExcelUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    // TODO: Implement actual file upload
    setTimeout(() => {
      setUploading(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              Upload Student Data
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Template Download */}
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Download Template</h4>
                  <p className="text-sm text-muted-foreground">
                    Get the Excel template with required columns
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* File Upload */}
          <div className="space-y-4">
            <Label htmlFor="excel-file">Upload Excel File</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Input
                id="excel-file"
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
                className="hidden"
              />
              <Label htmlFor="excel-file" className="cursor-pointer">
                <div className="space-y-2">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports .xlsx, .xls, .csv files
                  </p>
                </div>
              </Label>
            </div>

            {file && (
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}
          </div>

          {/* Upload Button */}
          <Button 
            onClick={handleUpload} 
            disabled={!file || uploading}
            className="w-full bg-gradient-primary hover:opacity-90"
          >
            {uploading ? "Uploading..." : "Upload Student Data"}
          </Button>

          {/* Instructions */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p><strong>Required columns:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Student ID</li>
              <li>Full Name</li>
              <li>School Name</li>
              <li>Grade Level</li>
              <li>Date of Birth (optional)</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};