import { Download } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

const installCode = `# Bước 1: Tải file hook

# Bước 2: Copy file useDragSwap.js vào thư mục hooks của bạn

# Bước 3: Import và sử dụng
import { useDragSwap } from './hooks/useDragSwap';`;

export default function InstallCode() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Cài đặt</h2>

        <a
          href="/useDragSwap.js"
          download
          className="
            inline-flex items-center gap-2
            text-sm font-semibold
            text-blue-700
            bg-blue-50
            border border-blue-200
            px-4 py-2
            rounded-md
            hover:bg-blue-100
            hover:border-blue-300
            hover:shadow-sm
            transition
          "
        >
          <Download className="w-4 h-4" />
          Tải useDragSwap.js
        </a>
      </div>

      <CodeBlock code={installCode} language="bash" />
    </section>
  );
}
