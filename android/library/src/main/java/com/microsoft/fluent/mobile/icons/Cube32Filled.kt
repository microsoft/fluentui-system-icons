package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cube32: ImageVector
  get() {
    if (_cube32 != null) {
      return _cube32!!
    }
    _cube32 = fluentIcon(name = "Filled.Cube32", 32f) {
      materialPath {
          moveTo(13.846F, 2.757F)
          curveToRelative(1.386F, -0.533F, 2.921F, -0.533F, 4.308F, 0.0F)
          lineToRelative(9.923F, 3.817F)
          curveTo(29.235F, 7.02F, 30.0F, 8.133F, 30.0F, 9.374F)
          verticalLineToRelative(13.253F)
          curveToRelative(0.0F, 1.241F, -0.765F, 2.354F, -1.923F, 2.8F)
          lineToRelative(-9.923F, 3.816F)
          curveToRelative(-1.387F, 0.534F, -2.921F, 0.534F, -4.308F, 0.0F)
          lineToRelative(-9.923F, -3.816F)
          curveTo(2.764F, 24.98F, 2.0F, 23.868F, 2.0F, 22.627F)
          verticalLineTo(9.374F)
          curveToRelative(0.0F, -1.241F, 0.764F, -2.355F, 1.923F, -2.8F)
          lineToRelative(9.923F, -3.817F)
          close()
          moveToRelative(-4.452F, 7.324F)
          curveTo(8.886F, 9.864F, 8.3F, 10.1F, 8.081F, 10.606F)
          curveTo(7.864F, 11.114F, 8.1F, 11.702F, 8.606F, 11.92F)
          lineTo(15.0F, 14.66F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineToRelative(-6.34F)
          lineToRelative(6.394F, -2.74F)
          curveToRelative(0.508F, -0.218F, 0.743F, -0.806F, 0.525F, -1.314F)
          curveToRelative(-0.217F, -0.507F, -0.805F, -0.742F, -1.313F, -0.525F)
          lineTo(16.0F, 12.912F)
          lineToRelative(-6.606F, -2.83F)
          close()        
      }
    }
    return _cube32!!
  }

private var _cube32: ImageVector? = null
