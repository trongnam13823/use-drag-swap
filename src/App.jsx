import { GripVertical, Download, Check, Zap, Code, Smartphone } from "lucide-react";

import { HorizontalDemo } from "./components/Demo/HorizontalDemo";
import { CodeBlock } from "./components/CodeBlock";
import { VerticalDemo } from "./components/Demo/VerticalDemo";
import InstallCode from "./components/InstallCode";

export default function DragSwapDocs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <GripVertical className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">useDragSwap</h1>
          </div>
          <p className="text-gray-600 text-lg">React hook cho drag-and-drop mượt mà, hỗ trợ cả chiều ngang và dọc</p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Zap className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Hiệu suất cao</h3>
              <p className="text-gray-600 text-sm">
                Tối ưu hóa với refs và memoization, không re-render không cần thiết
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Code className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">API đơn giản</h3>
              <p className="text-gray-600 text-sm">Chỉ cần 3 props để bắt đầu, dễ tích hợp vào bất kỳ dự án nào</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Smartphone className="w-8 h-8 text-pink-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Touch support</h3>
              <p className="text-gray-600 text-sm">Hoạt động mượt mà trên cả desktop và mobile devices</p>
            </div>
          </div>
        </section>

        {/* Demo & Usage Combined */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Demo & Hướng dẫn</h2>

          {/* Horizontal Demo */}
          <HorizontalDemo />

          {/* Vertical Demo */}
          <VerticalDemo />
        </section>

        {/* Installation */}
        <InstallCode />

        {/* API Reference */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Reference</h2>

          {/* Input Props */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Input Props</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">items</code>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">required</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Mảng các items cần sắp xếp. Mỗi item phải có thuộc tính{" "}
                  <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">id</code> duy nhất.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                  Array&lt;&#123; id: string, ...rest &#125;&gt;
                </code>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">onReorder</code>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">required</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Callback được gọi khi thứ tự items thay đổi, nhận vào mảng items mới.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">(newItems: Array) =&gt; void</code>
              </div>
              <div className="px-6 py-4 bg-blue-50">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">direction</code>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">optional</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Hướng kéo thả: <code className="text-xs bg-gray-100 px-1 rounded">"horizontal"</code> (ngang) hoặc{" "}
                  <code className="text-xs bg-gray-100 px-1 rounded">"vertical"</code> (dọc). Mặc định:{" "}
                  <code className="text-xs bg-gray-100 px-1 rounded">"horizontal"</code>
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">"horizontal" | "vertical"</code>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">gap</code>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">optional</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Khoảng cách giữa các items (pixels). Mặc định:{" "}
                  <code className="text-xs bg-gray-100 px-1 rounded">20</code>
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">number</code>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">transitionDuration</code>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">optional</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Thời gian animation (milliseconds). Mặc định:{" "}
                  <code className="text-xs bg-gray-100 px-1 rounded">200</code>
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">number</code>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-mono text-blue-600">transitionTimingFunction</code>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">optional</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Timing function cho animation. Mặc định:{" "}
                  <code className="text-xs bg-gray-100 px-1 rounded">"ease-out"</code>
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">string</code>
              </div>
            </div>
          </div>

          {/* Return Values */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">Return Values</h3>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-6 py-4">
                <code className="text-sm font-mono text-purple-600 mb-2 block">getItemProps(item)</code>
                <p className="text-sm text-gray-600 mb-2">
                  Trả về props cần spread vào element chứa item (ref và style).
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">&#123; ref, style &#125;</code>
              </div>
              <div className="px-6 py-4">
                <code className="text-sm font-mono text-purple-600 mb-2 block">getHandleProps(itemId)</code>
                <p className="text-sm text-gray-600 mb-2">
                  Trả về props cần spread vào element làm handle để kéo (onMouseDown, onTouchStart, style).
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                  &#123; onMouseDown, onTouchStart, style &#125;
                </code>
              </div>
              <div className="px-6 py-4">
                <code className="text-sm font-mono text-purple-600 mb-2 block">containerRef</code>
                <p className="text-sm text-gray-600 mb-2">Ref cần gán vào container chứa tất cả items.</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">RefObject</code>
              </div>
              <div className="px-6 py-4">
                <code className="text-sm font-mono text-purple-600 mb-2 block">isDragging</code>
                <p className="text-sm text-gray-600 mb-2">Boolean cho biết có item nào đang được kéo hay không.</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">boolean</code>
              </div>
              <div className="px-6 py-4">
                <code className="text-sm font-mono text-purple-600 mb-2 block">draggingId</code>
                <p className="text-sm text-gray-600 mb-2">
                  ID của item đang được kéo, hoặc null nếu không có item nào được kéo.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block">string | null</code>
              </div>
            </div>
          </div>
        </section>

        {/* Why useDragSwap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tại sao chọn useDragSwap?</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hỗ trợ cả 2 hướng</h4>
                  <p className="text-sm text-gray-600">
                    Linh hoạt chuyển đổi giữa chiều ngang và chiều dọc chỉ bằng 1 prop, không cần thay đổi code logic.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Không dependency nặng</h4>
                  <p className="text-sm text-gray-600">
                    Pure React hooks, không cần cài thêm thư viện nào khác như dnd-kit hay react-beautiful-dnd.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bundle size siêu nhỏ</h4>
                  <p className="text-sm text-gray-600">
                    Chỉ ~4KB gzipped (bao gồm cả hỗ trợ 2 hướng), gấp 10 lần nhẹ hơn so với các thư viện drag-drop phổ
                    biến.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Animation mượt mà</h4>
                  <p className="text-sm text-gray-600">
                    Sử dụng CSS transforms và refs thay vì re-render, đảm bảo 60fps ngay cả với nhiều items.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tự động constrain</h4>
                  <p className="text-sm text-gray-600">
                    Item không thể kéo ra ngoài container, tự động giới hạn trong boundaries cho cả 2 hướng.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">TypeScript ready</h4>
                  <p className="text-sm text-gray-600">
                    Dễ dàng thêm types nếu cần, cấu trúc code rõ ràng và type-safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">Sẵn sàng sử dụng?</h2>
            <p className="mb-6 text-blue-100">Tải xuống và bắt đầu sử dụng ngay trong dự án của bạn</p>
            <a
              download={true}
              href="/useDragSwap.js"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              Tải xuống useDragSwap.js
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
          <p>Made with ❤️ for Nam Dep Trai</p>
        </div>
      </footer>
    </div>
  );
}
