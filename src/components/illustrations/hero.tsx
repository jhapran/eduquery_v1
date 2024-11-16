export function HeroIllustration() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main container */}
      <rect x="50" y="50" width="400" height="300" rx="16" fill="url(#hero-gradient)" />
      
      {/* Question generation animation */}
      <g>
        {/* Subject selection */}
        <rect x="80" y="80" width="160" height="40" rx="8" fill="#EBF8FF" stroke="#3B82F6" strokeWidth="2">
          <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />
        </rect>
        <text x="100" y="105" fill="#3B82F6" fontSize="14" fontFamily="sans-serif">Mathematics</text>
        
        {/* Question type */}
        <rect x="80" y="140" width="120" height="40" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="2">
          <animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </rect>
        <text x="100" y="165" fill="#10B981" fontSize="14" fontFamily="sans-serif">Multiple Choice</text>
        
        {/* Generated questions */}
        <g>
          <rect x="280" y="80" width="140" height="240" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="2" />
          
          {/* Question items with animation */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect 
                x="300" 
                y={100 + i * 60} 
                width="100" 
                height="40" 
                rx="4" 
                fill="#F5F3FF"
              >
                <animate 
                  attributeName="width" 
                  values="0;100" 
                  dur="1s" 
                  begin={`${i * 0.3}s`} 
                  fill="freeze" 
                />
              </rect>
              
              <circle 
                cx="290" 
                cy={120 + i * 60} 
                r="4" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="r" 
                  values="0;4" 
                  dur="0.3s" 
                  begin={`${i * 0.3}s`} 
                  fill="freeze" 
                />
              </circle>
            </g>
          ))}
        </g>
      </g>
      
      {/* Progress indicator */}
      <g>
        <rect x="80" y="280" width="160" height="8" rx="4" fill="#EBF8FF" />
        <rect x="80" y="280" width="120" height="8" rx="4" fill="url(#progress-gradient)">
          <animate attributeName="width" values="0;120" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* Decorative elements */}
      <circle cx="450" cy="100" r="8" fill="#3B82F6" fillOpacity="0.2">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="300" r="8" fill="#10B981" fillOpacity="0.2">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
      
      <defs>
        <linearGradient id="hero-gradient" x1="50" y1="50" x2="450" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0F9FF" />
          <stop offset="0.5" stopColor="#F0FDF4" />
          <stop offset="1" stopColor="#F5F3FF" />
        </linearGradient>
        
        <linearGradient id="progress-gradient" x1="80" y1="284" x2="200" y2="284" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#10B981" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
}