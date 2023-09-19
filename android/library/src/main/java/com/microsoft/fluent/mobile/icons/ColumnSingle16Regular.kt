package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColumnSingle16: ImageVector
  get() {
    if (_columnSingle16 != null) {
      return _columnSingle16!!
    }
    _columnSingle16 = fluentIcon(name = "Regular.ColumnSingle16", 16f) {
      materialPath {
          moveTo(5.75F, 2.0F)
          curveTo(4.784F, 2.0F, 4.0F, 2.784F, 4.0F, 3.75F)
          verticalLineToRelative(8.5F)
          curveTo(4.0F, 13.216F, 4.784F, 14.0F, 5.75F, 14.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveTo(11.0F, 2.784F, 10.216F, 2.0F, 9.25F, 2.0F)
          horizontalLineToRelative(-3.5F)
          close()
          moveTo(5.0F, 3.75F)
          curveTo(5.0F, 3.336F, 5.336F, 3.0F, 5.75F, 3.0F)
          horizontalLineToRelative(3.5F)
          curveTo(9.664F, 3.0F, 10.0F, 3.336F, 10.0F, 3.75F)
          verticalLineTo(5.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(3.75F)
          close()
          moveTo(5.0F, 6.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(6.25F)
          curveTo(10.0F, 12.664F, 9.664F, 13.0F, 9.25F, 13.0F)
          horizontalLineToRelative(-3.5F)
          curveTo(5.336F, 13.0F, 5.0F, 12.664F, 5.0F, 12.25F)
          verticalLineTo(6.0F)
          close()        
      }
    }
    return _columnSingle16!!
  }

private var _columnSingle16: ImageVector? = null
