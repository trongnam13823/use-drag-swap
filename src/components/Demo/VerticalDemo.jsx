import { memo, useState } from "react";
import { ArrowUpDown, ChevronDown, ChevronUp, Code, GripVertical } from "lucide-react";
import { CodeBlock } from "../CodeBlock";
import { useDragSwap } from "../../hooks/useDragSwap";

const verticalCode = `import { useState } from 'react';
import { useDragSwap } from './hooks/useDragSwap';

function MyVerticalList() {
  const [items, setItems] = useState([
    { id: '1', name: 'Priority 1' },
    { id: '2', name: 'Priority 2' },
    { id: '3', name: 'Priority 3' },
  ]);

  const { getItemProps, getHandleProps, containerRef } = useDragSwap({
    items,
    onReorder: setItems,
    gap: 12,
    direction: 'vertical', // Quan trọng: chỉ định chiều dọc
  });

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} {...getItemProps(item)}>
          <div {...getHandleProps(item.id)}>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}`;

export const VerticalDemo = memo(() => {
  const [demoVerticalItems, setDemoVerticalItems] = useState([
    { id: "v1", label: "Priority 1", color: "bg-emerald-500" },
    { id: "v2", label: "Priority 2", color: "bg-cyan-500" },
    { id: "v3", label: "Priority 3", color: "bg-indigo-500" },
    { id: "v4", label: "Priority 4", color: "bg-rose-500" },
  ]);

  const [showVerticalCode, setShowVerticalCode] = useState(false);

  const {
    getItemProps: getVerticalItemProps,
    getHandleProps: getVerticalHandleProps,
    containerRef: verticalContainerRef,
  } = useDragSwap({
    items: demoVerticalItems,
    onReorder: setDemoVerticalItems,
    gap: 16,
    direction: "vertical",
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg font-semibold text-gray-900">Chiều dọc (Vertical)</h3>
          </div>
          <button
            onClick={() => setShowVerticalCode(!showVerticalCode)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg transition-colors text-sm font-medium"
          >
            <Code className="w-4 h-4" />
            {showVerticalCode ? "Ẩn code" : "Xem code"}
            {showVerticalCode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-gray-600 mb-6">Kéo thả các items để sắp xếp lại theo chiều dọc:</p>
        <div ref={verticalContainerRef} className="flex flex-col gap-4 max-w-md">
          {demoVerticalItems.map((item) => (
            <div
              key={item.id}
              {...getVerticalItemProps(item)}
              className={`${item.color} text-white px-6 py-4 rounded-lg shadow-sm flex items-center gap-3`}
            >
              <div {...getVerticalHandleProps(item.id)}>
                <GripVertical className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {showVerticalCode && (
        <div className="bg-gray-900">
          <CodeBlock code={verticalCode} language="jsx" showLineNumbers={true} />
        </div>
      )}
    </div>
  );
});
