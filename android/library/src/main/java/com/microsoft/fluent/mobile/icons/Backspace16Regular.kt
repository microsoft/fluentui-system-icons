package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Backspace16: ImageVector
  get() {
    if (_backspace16 != null) {
      return _backspace16!!
    }
    _backspace16 = fluentIcon(name = "Regular.Backspace16", 16f) {
      materialPath {
          moveTo(6.002F, 3.0F)
          curveToRelative(-0.53F, 0.0F, -1.04F, 0.21F, -1.414F, 0.585F)
          lineToRelative(-3.002F, 3.0F)
          curveToRelative(-0.781F, 0.782F, -0.781F, 2.048F, 0.0F, 2.83F)
          lineToRelative(3.002F, 3.0F)
          curveTo(4.963F, 12.789F, 5.47F, 13.0F, 6.0F, 13.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.896F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.002F)
          close()
          moveTo(5.295F, 4.293F)
          curveTo(5.482F, 4.105F, 5.736F, 4.0F, 6.002F, 4.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.002F)
          curveToRelative(-0.266F, 0.0F, -0.52F, -0.105F, -0.707F, -0.293F)
          lineToRelative(-3.002F, -3.0F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(3.002F, -3.0F)
          close()
          moveToRelative(2.059F, 1.353F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(8.293F, 8.0F)
          lineTo(6.647F, 9.646F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineTo(9.0F, 8.707F)
          lineToRelative(1.646F, 1.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(9.707F, 8.0F)
          lineToRelative(1.647F, -1.646F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineTo(9.0F, 7.293F)
          lineTo(7.354F, 5.646F)
          close()        
      }
    }
    return _backspace16!!
  }

private var _backspace16: ImageVector? = null
