package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ColumnSingleCompare16: ImageVector
  get() {
    if (_columnSingleCompare16 != null) {
      return _columnSingleCompare16!!
    }
    _columnSingleCompare16 = fluentIcon(name = "Filled.ColumnSingleCompare16", 16f) {
      materialPath {
          moveTo(4.75F, 1.0F)
          curveTo(3.784F, 1.0F, 3.0F, 1.784F, 3.0F, 2.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.846F, 0.6F, 1.551F, 1.397F, 1.714F)
          curveTo(4.511F, 14.988F, 4.63F, 15.0F, 4.75F, 15.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(2.75F)
          curveTo(13.0F, 1.784F, 12.216F, 1.0F, 11.25F, 1.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(4.0F, 5.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(0.0F, 4.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(4.0F)
          verticalLineTo(9.0F)
          close()        
      }
    }
    return _columnSingleCompare16!!
  }

private var _columnSingleCompare16: ImageVector? = null
