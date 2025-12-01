import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface VerificationFormProps {
  onNavigate: (screen: string) => void;
}

const exams = [
  'SSC CGL',
  'SSC CHSL',
  'SSC MTS',
  'IBPS PO',
  'IBPS Clerk',
  'SBI PO',
  'SBI Clerk',
  'RRB NTPC',
  'RRB Group D',
  'State PSC',
  'UPSC CSE',
  'UPSC CDS',
  'Other',
];

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

export function VerificationForm({ onNavigate }: VerificationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    examName: '',
    year: '',
    attempt: '',
    rollNumber: '',
    marks: '',
  });

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-[#111827] text-3xl mb-2">Verification Details</h1>
          <p className="text-[#6B7280]">
            Please fill in your exam details accurately. This information will be displayed on your profile.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name (as per scorecard)</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="examName">Exam Name</Label>
              <Select
                value={formData.examName}
                onValueChange={(value) => setFormData({ ...formData, examName: value })}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select exam" />
                </SelectTrigger>
                <SelectContent>
                  {exams.map((exam) => (
                    <SelectItem key={exam} value={exam}>
                      {exam}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year">Year</Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) => setFormData({ ...formData, year: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="attempt">Attempt Number</Label>
                <Select
                  value={formData.attempt}
                  onValueChange={(value) => setFormData({ ...formData, attempt: value })}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Attempt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Attempt</SelectItem>
                    <SelectItem value="2">2nd Attempt</SelectItem>
                    <SelectItem value="3">3rd Attempt</SelectItem>
                    <SelectItem value="4">4th Attempt</SelectItem>
                    <SelectItem value="5+">5+ Attempts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="rollNumber">Roll Number</Label>
              <Input
                id="rollNumber"
                placeholder="Enter your roll number"
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="marks">Marks/Percentile (Optional)</Label>
              <Input
                id="marks"
                placeholder="e.g., 550/600 or 98.5 percentile"
                value={formData.marks}
                onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                className="mt-2"
              />
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800">
                <strong>Note:</strong> All information will be cross-verified with your uploaded scorecard. Any mismatch may lead to rejection.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={() => onNavigate('upload-scorecard')}
              variant="outline"
              className="flex-1"
            >
              Back
            </Button>
            <Button
              onClick={() => onNavigate('verification-loading')}
              className="flex-1 bg-[#2B59FF] hover:bg-[#1E40AF] text-white"
            >
              Submit for Verification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
