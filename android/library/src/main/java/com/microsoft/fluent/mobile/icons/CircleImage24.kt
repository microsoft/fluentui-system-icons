package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CircleImage24: ImageVector
  get() {
    if (_circleImage24 != null) {
      return _circleImage24!!
    }
    _circleImage24 = fluentIcon(name = "Filled.CircleImage24", 24f) {
      materialPath {
          moveTo(12.25F, 8.0F)
          horizontalLineToRelative(3.68F)
          curveTo(15.443F, 4.608F, 12.526F, 2.0F, 9.0F, 2.0F)
          curveTo(5.134F, 2.0F, 2.0F, 5.134F, 2.0F, 9.0F)
          curveToRelative(0.0F, 3.527F, 2.608F, 6.444F, 6.0F, 6.93F)
          verticalLineToRelative(-3.68F)
          curveTo(8.0F, 9.903F, 9.903F, 8.0F, 12.25F, 8.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          curveTo(10.455F, 9.0F, 9.0F, 10.455F, 9.0F, 12.25F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.626F, 0.177F, 1.21F, 0.483F, 1.706F)
          lineToRelative(4.25F, -4.249F)
          curveToRelative(0.976F, -0.976F, 2.558F, -0.976F, 3.535F, 0.0F)
          lineToRelative(4.249F, 4.25F)
          curveTo(21.823F, 19.96F, 22.0F, 19.375F, 22.0F, 18.75F)
          verticalLineToRelative(-6.5F)
          curveTo(22.0F, 10.455F, 20.545F, 9.0F, 18.75F, 9.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveToRelative(8.206F, 12.517F)
          lineToRelative(-4.249F, -4.25F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          lineToRelative(-4.25F, 4.25F)
          curveTo(11.04F, 21.823F, 11.625F, 22.0F, 12.25F, 22.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.626F, 0.0F, 1.21F, -0.177F, 1.706F, -0.483F)
          close()
          moveTo(19.25F, 13.0F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          reflectiveCurveToRelative(-1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          close()        
      }
    }
    return _circleImage24!!
  }

private var _circleImage24: ImageVector? = null
