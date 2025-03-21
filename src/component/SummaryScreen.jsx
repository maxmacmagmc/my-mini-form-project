
export default function SummaryScreen({ formData, onReset }) {
    return (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">แบบสำรวจของคุณ</h2>
        <p><strong>ชื่อ:</strong> {formData.name}</p>
        <p><strong>อีเมล:</strong> {formData.email}</p>
        <p><strong>ภาพยนตร์ที่เลือก:</strong> {formData.movie}</p>
        {formData.comments && <p><strong>ความคิดเห็น:</strong> {formData.comments}</p>}
        <button
          onClick={onReset}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          เริ่มใหม่
        </button>
      </div>
    );
  }
  