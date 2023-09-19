package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cube24: ImageVector
  get() {
    if (_cube24 != null) {
      return _cube24!!
    }
    _cube24 = fluentIcon(name = "Filled.Cube24", 24f) {
      materialPath {
          moveTo(13.409F, 2.511F)
          curveToRelative(-0.904F, -0.366F, -1.914F, -0.366F, -2.818F, 0.0F)
          lineToRelative(-7.498F, 3.04F)
          curveTo(2.432F, 5.819F, 2.0F, 6.461F, 2.0F, 7.173F)
          verticalLineToRelative(9.653F)
          curveToRelative(0.0F, 0.712F, 0.432F, 1.354F, 1.092F, 1.621F)
          lineToRelative(7.5F, 3.04F)
          curveToRelative(0.903F, 0.367F, 1.913F, 0.367F, 2.817F, 0.0F)
          lineToRelative(7.498F, -3.04F)
          curveTo(21.567F, 18.18F, 22.0F, 17.538F, 22.0F, 16.826F)
          verticalLineTo(7.173F)
          curveToRelative(0.0F, -0.713F, -0.432F, -1.354F, -1.093F, -1.622F)
          lineToRelative(-7.498F, -3.04F)
          close()
          moveToRelative(-7.36F, 5.472F)
          curveToRelative(0.147F, -0.387F, 0.58F, -0.582F, 0.967F, -0.435F)
          lineTo(12.0F, 9.438F)
          lineToRelative(4.984F, -1.89F)
          curveToRelative(0.387F, -0.147F, 0.82F, 0.048F, 0.967F, 0.435F)
          curveToRelative(0.147F, 0.387F, -0.048F, 0.82F, -0.435F, 0.967F)
          lineToRelative(-4.766F, 1.81F)
          verticalLineToRelative(5.49F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-5.49F)
          lineTo(6.484F, 8.95F)
          curveTo(6.097F, 8.803F, 5.902F, 8.37F, 6.049F, 7.983F)
          close()        
      }
    }
    return _cube24!!
  }

private var _cube24: ImageVector? = null
