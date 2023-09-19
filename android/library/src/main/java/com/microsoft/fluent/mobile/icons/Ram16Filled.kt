package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Ram16: ImageVector
  get() {
    if (_ram16 != null) {
      return _ram16!!
    }
    _ram16 = fluentIcon(name = "Filled.Ram16", 16f) {
      materialPath {
          moveTo(10.0F, 8.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(2.0F)
          close()
          moveTo(7.0F, 8.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(2.0F)
          close()
          moveTo(4.0F, 8.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(9.0F, -5.0F)
          horizontalLineTo(3.0F)
          curveTo(1.897F, 3.0F, 1.0F, 3.897F, 1.0F, 5.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.739F, 0.403F, 1.385F, 1.0F, 1.731F)
          verticalLineToRelative(1.019F)
          curveTo(2.0F, 12.439F, 2.561F, 13.0F, 3.25F, 13.0F)
          horizontalLineTo(6.5F)
          curveToRelative(0.133F, 0.0F, 0.26F, -0.053F, 0.354F, -0.146F)
          lineTo(8.0F, 11.708F)
          lineToRelative(1.146F, 1.146F)
          curveTo(9.24F, 12.948F, 9.367F, 13.0F, 9.5F, 13.0F)
          horizontalLineToRelative(3.25F)
          curveToRelative(0.689F, 0.0F, 1.25F, -0.561F, 1.25F, -1.25F)
          verticalLineToRelative(-1.019F)
          curveToRelative(0.597F, -0.346F, 1.0F, -0.992F, 1.0F, -1.731F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.103F, -0.897F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(0.0F, 5.5F)
          curveTo(13.0F, 8.776F, 12.776F, 9.0F, 12.5F, 9.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 9.0F, 3.0F, 8.776F, 3.0F, 8.5F)
          verticalLineToRelative(-3.0F)
          curveTo(3.0F, 5.224F, 3.224F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(9.0F)
          curveTo(12.776F, 5.0F, 13.0F, 5.224F, 13.0F, 5.5F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _ram16!!
  }

private var _ram16: ImageVector? = null
