package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Notebook20: ImageVector
  get() {
    if (_notebook20 != null) {
      return _notebook20!!
    }
    _notebook20 = fluentIcon(name = "Filled.Notebook20", 20f) {
      materialPath {
          moveTo(5.0F, 2.0F)
          curveTo(3.895F, 2.0F, 3.0F, 2.895F, 3.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(5.0F)
          close()
          moveToRelative(0.0F, 3.5F)
          curveTo(5.0F, 5.224F, 5.224F, 5.0F, 5.5F, 5.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.776F, 5.0F, 13.0F, 5.224F, 13.0F, 5.5F)
          verticalLineToRelative(1.0F)
          curveTo(13.0F, 6.776F, 12.776F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(5.224F, 7.0F, 5.0F, 6.776F, 5.0F, 6.5F)
          verticalLineToRelative(-1.0F)
          close()
          moveTo(16.0F, 6.0F)
          horizontalLineToRelative(0.5F)
          curveTo(16.776F, 6.0F, 17.0F, 6.224F, 17.0F, 6.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(16.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 3.5F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(16.0F)
          verticalLineTo(9.5F)
          close()
          moveToRelative(0.0F, 3.5F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(16.0F)
          verticalLineTo(13.0F)
          close()        
      }
    }
    return _notebook20!!
  }

private var _notebook20: ImageVector? = null
