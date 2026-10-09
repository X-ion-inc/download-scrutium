/**
 * Centralized Configuration for Scrutium AI Official Download Portal
 * 
 * Production Base URL: https://download.scrutium.com
 * Try on Web: https://scrutium.com
 * Documentation: https://documentation.scrutium.com
 */

export interface PlatformRelease {
  id: 'android' | 'windows' | 'macos' | 'ios' | 'linux';
  name: string;
  subtitle: string;
  status: 'available' | 'coming-soon';
  version?: string;
  releaseDate?: string;
  fileSize?: string;
  format?: string;
  downloadUrl?: string;
  fileName?: string;
  sha256?: string;
  minRequirements: string;
  recommendedRequirements?: string;
  iconName: 'Smartphone' | 'Monitor' | 'Laptop' | 'Apple' | 'Terminal';
  shortNotes: string;
  installSteps?: string[];
  securityNotice?: string;
}

export const SITE_CONFIG = {
  name: 'Scrutium AI',
  domain: 'https://download.scrutium.com',
  webAppUrl: 'https://scrutium.com',
  docsUrl: 'https://documentation.scrutium.com',
  supportEmail: 'support@scrutium.com',
  companyName: 'Scrutium Inc.',
  headline: 'Scrutium AI. Intelligence that moves with you.',
  subheadline:
    'Meet Scrutium, your AI assistant for exploring ideas, solving problems, writing, learning, coding, and getting more done. Download the app and take your AI experience wherever you go.',
  currentReleaseVersion: 'v1.2.0',
  releaseMonth: 'October 2026',
};

export const PLATFORMS: PlatformRelease[] = [
  {
    id: 'android',
    name: 'Android',
    subtitle: 'Phones & Tablets',
    status: 'available',
    version: '1.2.0',
    releaseDate: 'October 2026',
    fileSize: '42.8 MB',
    format: 'APK (Universal ARM64 / ARMv7)',
    fileName: 'scrutium-ai-v1.2.0.apk',
    downloadUrl: '/api/download/android',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    minRequirements: 'Android 9.0 (Pie) or higher',
    recommendedRequirements: 'Android 12+, 4GB RAM or higher',
    iconName: 'Smartphone',
    shortNotes: 'Direct APK installation with built-in auto-update notification.',
    installSteps: [
      'Download the official APK installer using the button below.',
      'Open your Downloads folder and tap "scrutium-ai-v1.2.0.apk".',
      'If prompted, allow "Install unknown apps" in Android Settings for your browser or file manager.',
      'Tap Install and launch Scrutium AI once completed.',
    ],
    securityNotice:
      'Security guidance: Sideloading APKs requires enabling unknown sources for your browser. Always verify the SHA-256 checksum against this official page to ensure package integrity.',
  },
  {
    id: 'windows',
    name: 'Windows',
    subtitle: 'Desktop & Laptop',
    status: 'available',
    version: '1.2.0',
    releaseDate: 'October 2026',
    fileSize: '78.4 MB',
    format: 'Installer (.exe 64-bit)',
    fileName: 'scrutium-ai-setup-v1.2.0.exe',
    downloadUrl: '/api/download/windows',
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    minRequirements: 'Windows 10 / 11 (64-bit)',
    recommendedRequirements: 'Windows 11, Intel Core i5 / AMD Ryzen 5, 8GB RAM',
    iconName: 'Monitor',
    shortNotes: 'Native desktop experience with global quick-launch shortcut.',
    installSteps: [
      'Download the 64-bit Windows setup executable.',
      'Double-click "scrutium-ai-setup-v1.2.0.exe" from your downloads folder.',
      'Follow the setup wizard to complete installation.',
      'Launch Scrutium AI from your Start Menu or Desktop shortcut.',
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    subtitle: 'Apple Silicon & Intel',
    status: 'coming-soon',
    minRequirements: 'macOS 13.0 (Ventura) or later',
    iconName: 'Apple',
    shortNotes: 'Universal binary DMG package currently undergoing Apple notarization.',
  },
  {
    id: 'ios',
    name: 'iOS & iPadOS',
    subtitle: 'iPhone & iPad',
    status: 'coming-soon',
    minRequirements: 'iOS 16.0 or later',
    iconName: 'Smartphone',
    shortNotes: 'App Store review in progress. Access all capabilities via mobile browser right now.',
  },
  {
    id: 'linux',
    name: 'Linux',
    subtitle: 'Debian, Ubuntu & Fedora',
    status: 'coming-soon',
    minRequirements: 'glibc 2.31+ / 64-bit x86_64',
    iconName: 'Terminal',
    shortNotes: 'AppImage and .deb distribution packages planned for upcoming rollout.',
  },
];

export const FEATURES = [
  {
    id: 'conversations',
    title: 'Adaptive AI Conversations',
    description:
      'Engage in deep, multi-turn reasoning and contextual Q&A tailored to your line of work, studies, or curiosity.',
    metric: 'Instant response latency',
  },
  {
    id: 'writing',
    title: 'Writing, Rewriting & Summaries',
    description:
      'Draft reports, proofread essays, summarize long texts, and modulate tone from casual to academic with ease.',
    metric: 'Tone & density controls',
  },
  {
    id: 'coding',
    title: 'Code & Debugging Partner',
    description:
      'Inspect stack traces, write scripts, refactor algorithms, and receive line-by-line technical clarifications.',
    metric: 'Multi-language syntax support',
  },
  {
    id: 'research',
    title: 'Research & Structured Synthesis',
    description:
      'Break down complex subjects, compare options, and synthesize structured outlines ready for your workflow.',
    metric: 'Clear, logical breakdowns',
  },
  {
    id: 'analysis',
    title: 'Document & Data Clarification',
    description:
      'Paste excerpts, schemas, and notes to quickly extract actionable insights, action items, and key takeaways.',
    metric: 'Deep context retention',
  },
  {
    id: 'sync',
    title: 'Cross-Device Continuity',
    description:
      'Seamlessly pick up discussions started in the mobile app on your desktop app or in the web browser at scrutium.com.',
    metric: 'Universal account access',
  },
];

export const WHY_SCRUTIUM = [
  {
    title: 'Dedicated Native Performance',
    description:
      'Run Scrutium in its own optimized window without browser tab clutter, memory overhead, or accidental closures.',
  },
  {
    title: 'Fast Keyboard Workflow',
    description:
      'Open quickly with global system shortcuts, paste snippets instantly, and maintain your cognitive flow state.',
  },
  {
    title: 'Consistent Web & App Parity',
    description:
      'Your prompt history and preferences stay synchronized whether you work on your phone, laptop, or through scrutium.com.',
  },
  {
    title: 'Direct, Verified Binaries',
    description:
      'Official signed releases directly from Scrutium engineering, with transparent SHA-256 checksums you can verify.',
  },
];

export const FAQS = [
  {
    question: 'What is Scrutium AI?',
    answer:
      'Scrutium AI is an intelligent assistant designed to help you explore ideas, solve analytical problems, write, code, and accomplish more every day. This portal provides verified, standalone applications for your desktop and mobile devices.',
  },
  {
    question: 'Which devices currently support the native Scrutium app?',
    answer:
      'Official standalone releases are currently available for Android devices (via verified universal APK) and Windows PCs (64-bit installer). Native packages for macOS, iOS, and Linux are in preparation. In the meantime, you can use Scrutium on any modern device via the web application.',
  },
  {
    question: 'Can I use Scrutium without installing an app?',
    answer:
      'Yes. You can access the full Scrutium AI experience directly from any modern browser by visiting https://scrutium.com without downloading any software.',
  },
  {
    question: 'How do I download and install Scrutium on Android?',
    answer:
      'Click the "Download APK" button under the Android platform card to download scrutium-ai-v1.2.0.apk. Open the downloaded file on your device. If prompted, enable "Install unknown apps" in Android Settings for your browser or file manager, then tap Install.',
  },
  {
    question: 'Is Scrutium available for Windows?',
    answer:
      'Yes. The 64-bit Windows setup executable is available for Windows 10 and Windows 11. Download the installer, run the setup wizard, and launch Scrutium directly from your Start Menu.',
  },
  {
    question: 'Where can I find official documentation and user guides?',
    answer:
      'Complete user guides, prompt best practices, and release notes are published at the official documentation portal: https://documentation.scrutium.com.',
  },
  {
    question: 'How do I update Scrutium when a new version is released?',
    answer:
      'The Windows application checks for official updates upon launch. On Android, the app will notify you when a newer APK build is available, or you can return to https://download.scrutium.com to download the latest release.',
  },
  {
    question: 'How do I verify the security and authenticity of downloaded files?',
    answer:
      'We publish the cryptographic SHA-256 hash checksum alongside each official release. On Windows, run "certutil -hashfile <filename> SHA256" in PowerShell or Command Prompt. On Android/Linux, run "sha256sum <filename>" in terminal to confirm it matches the hash listed on this page.',
  },
  {
    question: 'Where can I get technical support or report an issue?',
    answer:
      'For technical questions and feedback, consult https://documentation.scrutium.com or contact our engineering team via support@scrutium.com.',
  },
];
