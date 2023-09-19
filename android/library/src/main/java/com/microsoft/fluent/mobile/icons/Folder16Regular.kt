package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Folder16: ImageVector
  get() {
    if (_folder16 != null) {
      return _folder16!!
    }
    _folder16 = fluentIcon(name = "Regular.Folder16", 16f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.175F)
          lineTo(6.062F, 3.11F)
          curveTo(5.974F, 3.039F, 5.863F, 3.0F, 5.75F, 3.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 3.0F, 2.0F, 3.895F, 2.0F, 5.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.575F)
          lineToRelative(0.868F, 0.694F)
          lineTo(5.557F, 5.5F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(4.593F, 0.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(6.5F)
          horizontalLineToRelative(2.75F)
          curveToRelative(0.124F, 0.0F, 0.244F, -0.046F, 0.336F, -0.13F)
          lineTo(7.593F, 5.0F)
          close()        
      }
    }
    return _folder16!!
  }

private var _folder16: ImageVector? = null
