package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ColumnSingleCompare16: ImageVector
  get() {
    if (_columnSingleCompare16 != null) {
      return _columnSingleCompare16!!
    }
    _columnSingleCompare16 = fluentIcon(name = "Regular.ColumnSingleCompare16", 16f) {
      materialPath {
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 1.784F, 3.784F, 1.0F, 4.75F, 1.0F)
          horizontalLineToRelative(6.5F)
          curveTo(12.216F, 1.0F, 13.0F, 1.784F, 13.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.784F, 15.0F, 3.0F, 14.216F, 3.0F, 13.25F)
          verticalLineTo(2.75F)
          close()
          moveTo(4.75F, 2.0F)
          curveTo(4.336F, 2.0F, 4.0F, 2.336F, 4.0F, 2.75F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(2.75F)
          curveTo(12.0F, 2.336F, 11.664F, 2.0F, 11.25F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(4.0F, 9.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          verticalLineToRelative(2.25F)
          curveTo(4.0F, 13.664F, 4.336F, 14.0F, 4.75F, 14.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(11.0F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _columnSingleCompare16!!
  }

private var _columnSingleCompare16: ImageVector? = null
