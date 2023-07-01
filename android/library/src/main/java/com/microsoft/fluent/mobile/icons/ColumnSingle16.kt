package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ColumnSingle16: ImageVector
  get() {
    if (_columnSingle16 != null) {
      return _columnSingle16!!
    }
    _columnSingle16 = fluentIcon(name = "Filled.ColumnSingle16", 16f) {
      materialPath {
          moveTo(4.0F, 3.75F)
          curveTo(4.0F, 2.784F, 4.784F, 2.0F, 5.75F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.477F, 0.0F, 0.91F, 0.19F, 1.225F, 0.5F)
          horizontalLineTo(10.5F)
          verticalLineToRelative(0.025F)
          curveTo(10.81F, 2.841F, 11.0F, 3.273F, 11.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(11.0F, 13.216F, 10.216F, 14.0F, 9.25F, 14.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(4.784F, 14.0F, 4.0F, 13.216F, 4.0F, 12.25F)
          verticalLineToRelative(-8.5F)
          close()
          moveToRelative(1.0F, 8.5F)
          curveTo(5.0F, 12.664F, 5.336F, 13.0F, 5.75F, 13.0F)
          horizontalLineToRelative(3.5F)
          curveTo(9.664F, 13.0F, 10.0F, 12.664F, 10.0F, 12.25F)
          verticalLineTo(6.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(6.25F)
          close()        
      }
    }
    return _columnSingle16!!
  }

private var _columnSingle16: ImageVector? = null
