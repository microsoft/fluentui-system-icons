package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.KeyboardShiftUppercase20: ImageVector
  get() {
    if (_keyboardShiftUppercase20 != null) {
      return _keyboardShiftUppercase20!!
    }
    _keyboardShiftUppercase20 = fluentIcon(name = "Filled.KeyboardShiftUppercase20", 20f) {
      materialPath {
          moveTo(11.144F, 2.53F)
          curveToRelative(-0.6F, -0.707F, -1.69F, -0.707F, -2.288F, 0.0F)
          lineToRelative(-6.617F, 7.803F)
          curveToRelative(-0.55F, 0.65F, -0.089F, 1.647F, 0.763F, 1.647F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.017F)
          curveToRelative(0.0F, 0.552F, 0.447F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(11.98F)
          horizontalLineToRelative(2.996F)
          curveToRelative(0.852F, 0.0F, 1.314F, -0.997F, 0.763F, -1.647F)
          lineTo(11.144F, 2.53F)
          close()
          moveTo(6.5F, 17.0F)
          curveTo(6.224F, 17.0F, 6.0F, 17.224F, 6.0F, 17.5F)
          reflectiveCurveTo(6.224F, 18.0F, 6.5F, 18.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 17.0F, 13.5F, 17.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _keyboardShiftUppercase20!!
  }

private var _keyboardShiftUppercase20: ImageVector? = null
