/**
 * Centralized Configuration for Scrutium AI Official Download Portal
 * 
 * Production Base URL: https://download.scrutium.com
 * Try on Web: https://scrutium.com
 * Documentation: https://documentation.scrutium.com
 */

export interface PlatformRelease {
  id: 'android' | 'windows';
  name: string;
  subtitle: string;
  status: 'available';
  version: string;
  releaseDate: string;
  fileSize: string;
  format: string;
  downloadUrl: string;
  fileName: string;
  sha256: string;
  minRequirements: string;
  recommendedRequirements?: string;
  shortNotes: string;
  installSteps: string[];
  securityNotice?: string;
}

export const SITE_CONFIG = {
  name: 'Scrutium AI',
  domain: 'https://download.scrutium.com',
  webAppUrl: 'https://scrutium.com',
  docsUrl: 'https://documentation.scrutium.com',
  supportEmail: 'support@scrutium.com',
  companyName: 'X-ion, Inc.',
  headline: 'Scrutium, wherever you work.',
  subheadline:
    'Bring Scrutium AI to your device. Get the app, explore its capabilities, and continue on the web whenever you need to.',
  officialApkDownloadUrl:
    'https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk',
  currentReleaseVersion: 'v1.2.0',
  releaseDate: 'October 2026',
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
    fileName: 'scrutium.apk',
    downloadUrl:
      'https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk',
    sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
    minRequirements: 'Android 9.0 (Pie) or higher',
    recommendedRequirements: 'Android 12 or higher, 4 GB RAM',
    shortNotes: 'Direct APK download. Compatible with modern Android smartphones and tablets.',
    installSteps: [
      'Download the official APK installer package.',
      'Open your Downloads folder and select "scrutium.apk".',
      'If prompted, toggle "Allow from this source" in Android Settings.',
      'Tap Install and launch Scrutium AI to sign in or connect your account.',
    ],
    securityNotice:
      'Security notice: Android prompts for confirmation when installing packages outside the app store. Always verify the SHA-256 checksum to ensure cryptographic package integrity.',
  },
  {
    id: 'windows',
    name: 'Windows',
    subtitle: 'Desktop & Laptop',
    status: 'available',
    version: '1.2.0',
    releaseDate: 'October 2026',
    fileSize: '78.4 MB',
    format: '64-bit Installer (.exe)',
    fileName: 'scrutium-ai-setup-v1.2.0.exe',
    downloadUrl: '/api/download/windows',
    sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    minRequirements: 'Windows 10 or Windows 11 (64-bit)',
    recommendedRequirements: 'Windows 11 (64-bit), 8 GB RAM',
    shortNotes: 'Native desktop application with fast keyboard shortcuts and dedicated process isolation.',
    installSteps: [
      'Download the 64-bit Windows setup executable.',
      'Double-click "scrutium-ai-setup-v1.2.0.exe" from your downloads folder.',
      'Follow the setup wizard to complete installation.',
      'Launch Scrutium AI from your Start Menu or Desktop.',
    ],
  },
];

export const CAPABILITIES = [
  {
    id: 'reasoning',
    title: 'Contextual Q&A & Reasoning',
    description:
      'Explore complex inquiries, test hypotheses, and receive clear, reasoned responses with persistent conversation context.',
  },
  {
    id: 'writing',
    title: 'Writing & Structured Synthesis',
    description:
      'Draft reports, proofread prose, summarize lengthy reference documents, and structure thoughts without distraction.',
  },
  {
    id: 'coding',
    title: 'Technical Problem Solving & Code',
    description:
      'Analyze stack traces, explore algorithm designs, review scripts, and receive targeted implementation explanations.',
  },
  {
    id: 'continuity',
    title: 'Cross-Device Continuity',
    description:
      'Pick up your active sessions seamlessly across the native Android app, Windows desktop client, and scrutium.com.',
  },
];

export const FAQS = [
  {
    question: 'What is Scrutium AI?',
    answer:
      'Scrutium AI is an intelligent assistant built to help you explore ideas, solve analytical problems, write, and work with code. This portal provides official standalone applications for supported devices.',
  },
  {
    question: 'Which platforms are currently supported?',
    answer:
      'Official standalone installers are available for Android (Universal APK) and Windows (64-bit installer). Users on macOS, iOS, or Linux can use Scrutium with full capability directly through any modern browser at https://scrutium.com.',
  },
  {
    question: 'Can I use Scrutium without installing the app?',
    answer:
      'Yes. You can access the complete Scrutium AI experience in your browser at https://scrutium.com without downloading any software.',
  },
  {
    question: 'How do I install the Android version?',
    answer:
      'Download the official APK file from the download section. When opening the package, enable "Install unknown apps" in Android Settings if prompted, then complete installation.',
  },
  {
    question: 'Where can I find user guides and technical documentation?',
    answer:
      'Comprehensive documentation, usage guides, and configuration references are hosted at https://documentation.scrutium.com.',
  },
  {
    question: 'How do I verify the authenticity of a downloaded installer?',
    answer:
      'We publish the SHA-256 cryptographic hash alongside each release. Run "certutil -hashfile <file> SHA256" on Windows or "sha256sum <file>" in Linux/Android terminal to confirm the hash matches the one shown on this page.',
  },
  {
    question: 'How do updates work for standalone apps?',
    answer:
      'The Windows client checks for updates at launch. Android will alert you when a newer release is published, or you can check https://download.scrutium.com anytime.',
  },
  {
    question: 'Where can I get technical support?',
    answer:
      'For technical issues, bug reports, or inquiries, visit https://documentation.scrutium.com or email support@scrutium.com.',
  },
];
