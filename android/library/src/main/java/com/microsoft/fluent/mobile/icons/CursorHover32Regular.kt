package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CursorHover32: ImageVector
  get() {
    if (_cursorHover32 != null) {
      return _cursorHover32!!
    }
    _cursorHover32 = fluentIcon(name = "Regular.CursorHover32", 32f) {
      materialPath {
          moveTo(2.0F, 10.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          horizontalLineToRelative(20.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, 1.79F, 4.0F, 4.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.612F, -0.954F, 3.002F, -2.328F, 3.635F)
          curveToRelative(-0.14F, -0.275F, -0.325F, -0.53F, -0.55F, -0.756F)
          lineToRelative(-0.892F, -0.892F)
          curveTo(27.226F, 21.873F, 28.0F, 21.027F, 28.0F, 20.0F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-2.21F, 0.0F, -4.0F, -1.79F, -4.0F, -4.0F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(15.707F, 6.293F)
          curveToRelative(-0.286F, -0.286F, -0.716F, -0.372F, -1.09F, -0.217F)
          curveTo(16.244F, 16.231F, 16.0F, 16.596F, 16.0F, 17.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.43F, 0.275F, 0.813F, 0.684F, 0.949F)
          curveToRelative(0.408F, 0.136F, 0.858F, -0.005F, 1.116F, -0.349F)
          lineToRelative(2.7F, -3.6F)
          horizontalLineTo(25.0F)
          curveToRelative(0.404F, 0.0F, 0.77F, -0.244F, 0.924F, -0.617F)
          curveToRelative(0.155F, -0.374F, 0.07F, -0.804F, -0.217F, -1.09F)
          lineToRelative(-8.0F, -8.0F)
          close()
          moveTo(18.0F, 26.0F)
          verticalLineToRelative(-6.586F)
          lineTo(22.586F, 24.0F)
          horizontalLineTo(20.0F)
          curveToRelative(-0.315F, 0.0F, -0.611F, 0.148F, -0.8F, 0.4F)
          lineTo(18.0F, 26.0F)
          close()        
      }
    }
    return _cursorHover32!!
  }

private var _cursorHover32: ImageVector? = null
