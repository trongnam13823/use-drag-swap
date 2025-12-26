import { memo, useState } from "react";
import { ArrowLeftRight, ChevronDown, ChevronUp, Code, GripVertical } from "lucide-react";
import { CodeBlock } from "../CodeBlock";
import { useDragSwap } from "../../hooks/useDragSwap";

const horizontalCode = `import { useState } from 'react';
import { useDragSwap } from './hooks/useDragSwap';

function MyComponent() {
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  const { getItemProps, getHandleProps, containerRef } = useDragSwap({
    items,
    onReorder: setItems,
    gap: 16,
    direction: 'horizontal', // hoặc bỏ qua (mặc định là horizontal)
  });

  return (
    <div ref={containerRef} className="flex gap-4">
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

export const HorizontalDemo = memo(() => {
  const [showHorizontalCode, setShowHorizontalCode] = useState(false);
  const [demoHorizontalItems, setDemoHorizontalItems] = useState([
    { id: "1", label: "Task 1", color: "bg-blue-500" },
    { id: "2", label: "Task 2", color: "bg-purple-500" },
    { id: "3", label: "Task 3", color: "bg-pink-500" },
    { id: "4", label: "Task 4", color: "bg-orange-500" },
  ]);

  const {
    getItemProps: getHorizontalItemProps,
    getHandleProps: getHorizontalHandleProps,
    containerRef: horizontalContainerRef,
  } = useDragSwap({
    items: demoHorizontalItems,
    onReorder: setDemoHorizontalItems,
    gap: 16,
    direction: "horizontal",
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-6">
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Chiều ngang (Horizontal)</h3>
          </div>
          <button
            onClick={() => setShowHorizontalCode(!showHorizontalCode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors text-sm font-medium"
          >
            <Code className="w-4 h-4" />
            {showHorizontalCode ? "Ẩn code" : "Xem code"}
            {showHorizontalCode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-gray-600 mb-6">Kéo thả các items để sắp xếp lại theo chiều ngang:</p>
        <div ref={horizontalContainerRef} className="flex gap-4 flex-wrap">
          {demoHorizontalItems.map((item) => (
            <div
              key={item.id}
              {...getHorizontalItemProps(item)}
              className={`${item.color} text-white px-6 py-4 rounded-lg shadow-sm flex items-center gap-3 min-w-[140px]`}
            >
              <div {...getHorizontalHandleProps(item.id)}>
                <GripVertical className="w-5 h-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {showHorizontalCode && (
        <div className="bg-gray-900">
          <CodeBlock code={horizontalCode} language="jsx" showLineNumbers={true} />
        </div>
      )}
    </div>
  );
});
