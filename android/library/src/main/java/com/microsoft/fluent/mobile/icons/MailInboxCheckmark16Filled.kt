package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailInboxCheckmark16: ImageVector
  get() {
    if (_mailInboxCheckmark16 != null) {
      return _mailInboxCheckmark16!!
    }
    _mailInboxCheckmark16 = fluentIcon(name = "Filled.MailInboxCheckmark16", 16f) {
      materialPath {
          moveTo(15.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 7.985F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(15.0F, 3.015F, 15.0F, 5.5F)
          close()
          moveToRelative(-2.854F, -1.853F)
          lineTo(9.5F, 6.293F)
          lineTo(8.854F, 5.646F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.0F, 1.0F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          close()
          moveTo(14.0F, 9.742F)
          curveTo(13.05F, 10.528F, 11.83F, 11.0F, 10.5F, 11.0F)
          curveToRelative(-0.345F, 0.0F, -0.681F, -0.032F, -1.008F, -0.092F)
          curveTo(9.168F, 11.288F, 8.692F, 11.5F, 8.0F, 11.5F)
          curveToRelative(-0.897F, 0.0F, -1.432F, -0.356F, -1.74F, -0.974F)
          curveToRelative(-0.113F, -0.224F, -0.187F, -0.47F, -0.228F, -0.718F)
          curveTo(6.008F, 9.662F, 6.0F, 9.552F, 6.0F, 9.5F)
          curveTo(6.0F, 9.224F, 5.776F, 9.0F, 5.5F, 9.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.672F, 3.672F, 4.0F, 4.5F, 4.0F)
          horizontalLineToRelative(0.707F)
          curveTo(5.306F, 3.651F, 5.437F, 3.317F, 5.6F, 3.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(9.743F)
          close()        
      }
    }
    return _mailInboxCheckmark16!!
  }

private var _mailInboxCheckmark16: ImageVector? = null
