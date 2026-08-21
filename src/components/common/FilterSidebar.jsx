import React from 'react';
import { Check } from 'lucide-react';

export const FilterSidebar = ({
  sections,
  selectedFilters,
  onToggle,
  onClear,
  isOpen
}) => {
  const hasActive = Object.values(selectedFilters).some((arr) => arr.length > 0);

  return (
    <aside
      style={{ position: 'sticky', top: '140px', alignSelf: 'flex-start' }}
      className={`w-full lg:w-[280px] shrink-0 bg-white rounded-2xl p-5 border border-[#E8DFD1] shadow-xs space-y-5 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto ${
        isOpen ? 'fixed inset-4 z-50 overflow-y-auto bg-white shadow-2xl' : 'hidden lg:block'
      }`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B1F22]">FILTERS</h3>
        {hasActive && (
          <button type="button" onClick={onClear} className="text-[11px] text-[#B47B2B] hover:underline font-medium cursor-pointer">
            Clear All
          </button>
        )}
      </div>

      {sections.map((sec, idx) => (
        <div key={sec.key} className="space-y-2.5">
          {idx > 0 && <div className="h-[1px] bg-gray-100 mb-4" />}
          <h4 className="text-xs font-semibold text-[#B47B2B] uppercase tracking-wide">{sec.title}</h4>
          <div className="space-y-2">
            {sec.options.map((opt) => {
              const val = typeof opt === 'string' ? opt : opt.value;
              const label = typeof opt === 'string' ? opt : opt.label;
              const isChecked = selectedFilters[sec.key]?.includes(val);

              return (
                <label
                  key={val}
                  onClick={() => onToggle(sec.key, val)}
                  className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer select-none"
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                    isChecked ? 'bg-[#6B1F22] border-[#6B1F22] text-white' : 'border-[#D4C7B5] bg-white'
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{label}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};