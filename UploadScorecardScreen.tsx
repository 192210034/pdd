import { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { Button } from './ui/button';

interface UploadScorecardScreenProps {
  onNavigate: (screen: string) => void;
}

export function UploadScorecardScreen({ onNavigate }: UploadScorecardScreenProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-16 h-16 bg-[#2B59FF] rounded-2xl flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[#111827] text-3xl mb-2">Upload Your Scorecard</h1>
          <p className="text-[#6B7280]">
            Upload your exam scorecard/marksheet for verification. This helps us verify your achievement and build trust with aspirants.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
              dragActive ? 'border-[#2B59FF] bg-blue-50' : 'border-gray-300'
            }`}
          >
            {!selectedFile ? (
              <>
                <Upload className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
                <h3 className="text-[#111827] text-xl mb-2">Drop your scorecard here</h3>
                <p className="text-[#6B7280] mb-4">or</p>
                <label className="cursor-pointer">
                  <span className="bg-[#2B59FF] text-white px-6 py-3 rounded-lg inline-block hover:bg-[#1E40AF] transition-colors">
                    Browse Files
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-[#6B7280] mt-4">
                  Supported formats: PDF, JPG, PNG (Max 5MB)
                </p>
              </>
            ) : (
              <div className="flex items-center justify-between bg-[#F3F4F6] p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#2B59FF]" />
                  <div className="text-left">
                    <p className="text-[#111827]">{selectedFile.name}</p>
                    <p className="text-[#6B7280]">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-[#6B7280] hover:text-red-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-[#2B59FF]">
              <strong>Tip:</strong> Ensure your scorecard clearly shows your name, exam name, roll number, and marks. This speeds up verification.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => onNavigate('login')}
              variant="outline"
              className="flex-1"
            >
              Skip for Now
            </Button>
            <Button
              onClick={() => onNavigate('verification-form')}
              disabled={!selectedFile}
              className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
