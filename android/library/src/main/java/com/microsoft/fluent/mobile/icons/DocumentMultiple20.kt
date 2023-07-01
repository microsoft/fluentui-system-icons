package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentMultiple20: ImageVector
  get() {
    if (_documentMultiple20 != null) {
      return _documentMultiple20!!
    }
    _documentMultiple20 = fluentIcon(name = "Filled.DocumentMultiple20", 20f) {
      materialPath {
          moveTo(9.0F, 6.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(11.0F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(9.672F, 8.0F, 9.0F, 7.328F, 9.0F, 6.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(2.25F)
          lineTo(14.75F, 7.0F)
          horizontalLineTo(10.5F)
          curveTo(10.224F, 7.0F, 10.0F, 6.776F, 10.0F, 6.5F)
          close()
          moveTo(17.0F, 9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(6.06F)
          curveToRelative(2.176F, 0.0F, 3.94F, -1.764F, 3.94F, -3.94F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _documentMultiple20!!
  }

private var _documentMultiple20: ImageVector? = null
