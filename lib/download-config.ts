/**
 * Centralized Configuration for Scrutium AI Official Download Portal
 * 
 * Production Base URL: https://download.scrutium.com
 * Try on Web: https://scrutium.com
 * Documentation: https://documentation.scrutium.com
 */

export interface PlatformRelease {
  id: 'mobile' | 'windows';
  name: string;
  subtitle: string;
  status: 'available' | 'coming-soon';
  version?: string;
  format?: string;
  downloadUrl?: string;
  fileName?: string;
  minRequirements?: string;
  shortNotes: string;
  installSteps?: string[];
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
  currentReleaseVersion: '3.4.2',
};

export const PLATFORMS: PlatformRelease[] = [
  {
    id: 'mobile',
    name: 'Mobile App',
    subtitle: 'Smartphones & Tablets',
    status: 'available',
    version: '3.4.2',
    format: 'APK',
    fileName: 'scrutium.apk',
    downloadUrl:
      'https://github.com/X-ions/download-scrutium/releases/download/scrutium-mobile/scrutium.apk',
    minRequirements: 'Mobile OS',
    shortNotes: 'Official standalone Mobile App for smartphones and tablets. Direct download available now.',
    installSteps: [
      'Download the official APK package (scrutium.apk).',
      'Open your Downloads folder and tap "scrutium.apk".',
      'If prompted, allow installation from unknown sources in your device settings.',
      'Tap Install and launch Scrutium AI.',
    ],
  },
  {
    id: 'windows',
    name: 'Desktop App',
    subtitle: 'Windows & Mac',
    status: 'coming-soon',
    shortNotes:
      'Native desktop experience with global hotkey invocation and offline caching is currently in private development. Coming soon.',
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
      'Pick up your active sessions seamlessly across the native Mobile App, upcoming desktop client, and scrutium.com.',
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
      'The official standalone Mobile App is available (Version 3.4.2). Desktop standalone versions are coming soon. In the meantime, you can access the full Scrutium AI workspace on any computer or mobile browser at https://scrutium.com.',
  },
  {
    question: 'Can I use Scrutium without installing the app?',
    answer:
      'Yes. You can access the complete Scrutium AI experience in your browser at https://scrutium.com without downloading any software.',
  },
  {
    question: 'How do I install the Mobile App version?',
    answer:
      'Download the official APK file (scrutium.apk) from the download link. When opening the package, enable installation from unknown sources in your device settings if prompted, then complete installation.',
  },
  {
    question: 'Where can I find user guides and technical documentation?',
    answer:
      'Comprehensive documentation, usage guides, and configuration references are hosted at https://documentation.scrutium.com.',
  },
  {
    question: 'Where can I get technical support?',
    answer:
      'For technical issues, bug reports, or inquiries, visit https://documentation.scrutium.com or email support@scrutium.com.',
  },
];
