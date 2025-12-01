import { useState } from "react";
import { ChevronLeft, Upload, CheckCircle2 } from "lucide-react";

interface AchieverOnboardingFormProps {
  selectedExam: string;
  onSubmit: (data: AchieverFormData) => void;
  onBack: () => void;
}

export interface AchieverFormData {
  fullName: string;
  examCleared: string;
  yearOfPassing: string;
  rollNumber: string;
  attempts: string;
  document: File | null;
}

export function AchieverOnboardingForm({ selectedExam, onSubmit, onBack }: AchieverOnboardingFormProps) {
  const [formData, setFormData] = useState<AchieverFormData>({
    fullName: "",
    examCleared: selectedExam,
    yearOfPassing: "",
    rollNumber: "",
    attempts: "",
    document: null,
  });

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, document: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const years = Array.from({ length: 11 }, (_, i) => 2025 - i);
  const attempts = ["1", "2", "3", "4+"];

  const isFormValid = 
    formData.fullName.trim() !== "" &&
    formData.yearOfPassing !== "" &&
    formData.rollNumber.trim() !== "" &&
    formData.attempts !== "" &&
    formData.document !== null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-white">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#2B59FF] transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-[#111827] mb-2">Verify Your Achievement</h1>
          <p className="text-[#6B7280]">Please provide your exam details for verification</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-[#111827] mb-2">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all"
              required
            />
          </div>

          {/* Exam Cleared */}
          <div>
            <label className="block text-[#111827] mb-2">Exam Cleared</label>
            <input
              type="text"
              value={formData.examCleared}
              disabled
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 text-[#6B7280]"
            />
          </div>

          {/* Year of Passing */}
          <div>
            <label className="block text-[#111827] mb-2">Year of Passing</label>
            <select
              value={formData.yearOfPassing}
              onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all appearance-none bg-white"
              required
            >
              <option value="">Select year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Roll Number */}
          <div>
            <label className="block text-[#111827] mb-2">Roll Number / Registration Number</label>
            <input
              type="text"
              value={formData.rollNumber}
              onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
              placeholder="Enter your roll number"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all"
              required
            />
          </div>

          {/* Attempts */}
          <div>
            <label className="block text-[#111827] mb-2">Attempts</label>
            <select
              value={formData.attempts}
              onChange={(e) => setFormData({ ...formData, attempts: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2B59FF] focus:outline-none focus:ring-2 focus:ring-[#2B59FF]/20 transition-all appearance-none bg-white"
              required
            >
              <option value="">Select attempts</option>
              {attempts.map((attempt) => (
                <option key={attempt} value={attempt}>
                  {attempt}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Document */}
          <div>
            <label className="block text-[#111827] mb-2">Upload Scorecard / Result PDF</label>
            <label className="block">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <div className="w-full px-4 py-4 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#2B59FF] transition-colors cursor-pointer bg-white">
                <div className="flex items-center gap-3">
                  {fileName ? (
                    <>
                      <CheckCircle2 className="text-green-500" size={24} />
                      <div className="flex-1">
                        <p className="text-[#111827]">{fileName}</p>
                        <p className="text-sm text-[#6B7280]">Click to change</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="text-[#2B59FF]" size={24} />
                      <div className="flex-1">
                        <p className="text-[#111827]">Upload Document</p>
                        <p className="text-sm text-[#6B7280]">PDF, JPG or PNG (Max 5MB)</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </label>
            <p className="text-sm text-[#6B7280] mt-2">
              Upload your official result PDF or scorecard for verification.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-[#2B59FF] to-[#1E40AF] text-white py-4 rounded-2xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit for Verification
          </button>
        </form>

        {/* Info Note */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-sm text-[#6B7280]">
            <span className="text-[#2B59FF]">🔒 Secure: </span>
            Your documents are encrypted and used only for verification purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
