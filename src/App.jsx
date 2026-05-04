export default function App() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <div className="bg-blue-600 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold">
          Experts Academy
        </h1>
        <p className="mt-2 text-sm">
          CBSE | ICSE | State Board Coaching (Classes 6–12)
        </p>

        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded font-semibold">
          Enroll Now
        </button>
      </div>

      {/* COURSES */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Courses Offered
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Mathematics",
              "Physics",
              "Chemistry",
              "Biology",
              "Accountancy",
              "Economics"
            ].map((course) => (
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                <h3 className="text-lg font-medium">{course}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Concept-based learning with regular assessments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">
                Trusted by 200+ Students
              </h2>
              <p className="text-sm text-gray-600">
                Consistent results in board exams with personal attention and structured learning.
              </p>
            </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-12 px-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">
            Why Choose Us
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 text-sm">
            <div>
              <p className="text-xl">🎯</p>
              <p className="mt-2 font-medium">Small Batches</p>
              <p className="text-gray-500 mt-1">
                Focused attention for every student
              </p>
            </div>

            <div>
              <p className="text-xl">👨‍🏫</p>
              <p className="mt-2 font-medium">Experienced Faculty</p>
              <p className="text-gray-500 mt-1">
                Strong academic background
              </p>
            </div>

            <div>
              <p className="text-xl">📈</p>
              <p className="mt-2 font-medium">Proven Results</p>
              <p className="text-gray-500 mt-1">
                Consistent academic improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMINGS */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold mb-2">
            Batch Timings
          </h2>
          <p className="text-gray-600">
            Morning & Evening batches available
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Get in Touch
          </h2>

          <p className="text-lg font-medium">📞 9876543210</p>
          <p className="text-sm mt-1 opacity-90">📍 Chennai</p>

          <button className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium shadow">
            Contact Now
          </button>
        </div>
      </section>

    </div>
  );
}