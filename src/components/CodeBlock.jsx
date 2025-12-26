import { Check, Copy } from "lucide-react";
import { memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = memo(({ code, language = "jsx", showLineNumbers = false }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors z-10"
        title="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
          padding: "1.5rem",
          paddingTop: "1.5rem",
        }}
        showLineNumbers={showLineNumbers}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
});
