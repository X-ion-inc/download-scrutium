import { NextRequest, NextResponse } from 'next/server';
import { PLATFORMS } from '@/lib/download-config';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ platform: string }> }
) {
  const { platform } = await params;
  const platformConfig = PLATFORMS.find((p) => p.id === platform);

  if (!platformConfig || platformConfig.status !== 'available') {
    return new NextResponse('Platform release not found or not yet available', {
      status: 404,
    });
  }

  // Redirect directly to official external binary release
  if (platformConfig.downloadUrl && platformConfig.downloadUrl.startsWith('http')) {
    return NextResponse.redirect(platformConfig.downloadUrl, 302);
  }

  const fileName = platformConfig.fileName || `scrutium.apk`;
  
  // Package manifest
  const packagePayload = `=====================================================
SCRUTIUM AI OFFICIAL RELEASE MANIFEST
=====================================================
Application: Scrutium AI
Platform: ${platformConfig.name} (${platformConfig.subtitle})
Version: ${platformConfig.version}
Package: ${fileName}
Official Source: https://download.scrutium.com
Documentation: https://documentation.scrutium.com
Web Application: https://scrutium.com
=====================================================

Official Scrutium AI distribution. Copyright X-ion, Inc. All rights reserved.
`;

  return new NextResponse(packagePayload, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${fileName}"`,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
