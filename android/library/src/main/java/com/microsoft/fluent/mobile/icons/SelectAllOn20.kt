package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SelectAllOn20: ImageVector
  get() {
    if (_selectAllOn20 != null) {
      return _selectAllOn20!!
    }
    _selectAllOn20 = fluentIcon(name = "Filled.SelectAllOn20", 20f) {
      materialPath {
          moveTo(2.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(10.33F, 2.624F)
          curveToRelative(-0.209F, -0.182F, -0.524F, -0.161F, -0.706F, 0.047F)
          lineToRelative(-3.148F, 3.597F)
          lineToRelative(-1.623F, -1.622F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.098F, 0.098F, 0.232F, 0.151F, 0.37F, 0.147F)
          curveToRelative(0.139F, -0.005F, 0.27F, -0.067F, 0.36F, -0.17F)
          lineToRelative(3.5F, -4.0F)
          curveToRelative(0.182F, -0.209F, 0.161F, -0.524F, -0.047F, -0.706F)
          close()
          moveTo(4.267F, 17.0F)
          curveTo(4.613F, 17.598F, 5.26F, 18.0F, 6.0F, 18.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.74F, -0.402F, -1.387F, -1.0F, -1.732F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(4.268F)
          close()        
      }
    }
    return _selectAllOn20!!
  }

private var _selectAllOn20: ImageVector? = null
