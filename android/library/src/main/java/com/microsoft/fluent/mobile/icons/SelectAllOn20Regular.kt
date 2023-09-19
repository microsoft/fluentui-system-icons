package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SelectAllOn20: ImageVector
  get() {
    if (_selectAllOn20 != null) {
      return _selectAllOn20!!
    }
    _selectAllOn20 = fluentIcon(name = "Regular.SelectAllOn20", 20f) {
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
          moveToRelative(2.0F, -1.0F)
          curveTo(3.448F, 3.0F, 3.0F, 3.448F, 3.0F, 4.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(2.0F, 15.0F)
          curveToRelative(-0.74F, 0.0F, -1.387F, -0.402F, -1.732F, -1.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(4.268F)
          curveTo(17.598F, 4.613F, 18.0F, 5.26F, 18.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(6.376F, -10.67F)
          curveToRelative(0.182F, -0.209F, 0.161F, -0.524F, -0.047F, -0.706F)
          curveToRelative(-0.208F, -0.182F, -0.523F, -0.161F, -0.705F, 0.047F)
          lineToRelative(-3.148F, 3.597F)
          lineToRelative(-1.623F, -1.622F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.098F, 0.098F, 0.232F, 0.151F, 0.37F, 0.147F)
          curveToRelative(0.139F, -0.005F, 0.27F, -0.067F, 0.36F, -0.17F)
          lineToRelative(3.5F, -4.0F)
          close()        
      }
    }
    return _selectAllOn20!!
  }

private var _selectAllOn20: ImageVector? = null
