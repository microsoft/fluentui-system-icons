package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BookDefault28: ImageVector
  get() {
    if (_bookDefault28 != null) {
      return _bookDefault28!!
    }
    _bookDefault28 = fluentIcon(name = "Filled.BookDefault28", 28f) {
      materialPath {
          moveTo(4.5F, 5.75F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(12.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(16.0F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.018F)
          curveTo(6.139F, 23.348F, 6.868F, 24.0F, 7.75F, 24.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineTo(5.75F)
          close()
          moveTo(8.0F, 7.25F)
          verticalLineToRelative(1.0F)
          curveTo(8.0F, 8.94F, 8.56F, 9.5F, 9.25F, 9.5F)
          horizontalLineToRelative(9.5F)
          curveTo(19.44F, 9.5F, 20.0F, 8.94F, 20.0F, 8.25F)
          verticalLineToRelative(-1.0F)
          curveTo(20.0F, 6.56F, 19.44F, 6.0F, 18.75F, 6.0F)
          horizontalLineToRelative(-9.5F)
          curveTo(8.56F, 6.0F, 8.0F, 6.56F, 8.0F, 7.25F)
          close()        
      }
    }
    return _bookDefault28!!
  }

private var _bookDefault28: ImageVector? = null
