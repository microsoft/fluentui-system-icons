package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailAllUnread20: ImageVector
  get() {
    if (_mailAllUnread20 != null) {
      return _mailAllUnread20!!
    }
    _mailAllUnread20 = fluentIcon(name = "Filled.MailAllUnread20", 20f) {
      materialPath {
          moveTo(14.5F, 7.0F)
          curveTo(15.88F, 7.0F, 17.0F, 5.88F, 17.0F, 4.5F)
          reflectiveCurveTo(15.88F, 2.0F, 14.5F, 2.0F)
          reflectiveCurveTo(12.0F, 3.12F, 12.0F, 4.5F)
          reflectiveCurveTo(13.12F, 7.0F, 14.5F, 7.0F)
          close()
          moveToRelative(-3.163F, -4.0F)
          horizontalLineTo(4.5F)
          curveTo(3.213F, 3.0F, 2.153F, 3.973F, 2.015F, 5.223F)
          lineTo(9.0F, 8.92F)
          lineToRelative(3.264F, -1.728F)
          curveTo(11.492F, 6.551F, 11.0F, 5.582F, 11.0F, 4.5F)
          curveToRelative(0.0F, -0.537F, 0.12F, -1.045F, 0.337F, -1.5F)
          close()
          moveToRelative(1.972F, 4.792F)
          lineTo(9.254F, 9.931F)
          curveToRelative(-0.157F, 0.092F, -0.351F, 0.092F, -0.507F, 0.0F)
          lineTo(2.0F, 6.373F)
          verticalLineTo(12.5F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(7.663F)
          curveTo(15.545F, 7.88F, 15.037F, 8.0F, 14.5F, 8.0F)
          curveToRelative(-0.418F, 0.0F, -0.82F, -0.073F, -1.19F, -0.208F)
          close()
          moveTo(6.5F, 17.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.933F, 0.0F, 3.5F, -1.567F, 3.5F, -3.5F)
          verticalLineToRelative(-5.0F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _mailAllUnread20!!
  }

private var _mailAllUnread20: ImageVector? = null
