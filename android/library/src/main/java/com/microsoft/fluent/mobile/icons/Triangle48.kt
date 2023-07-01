package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Triangle48: ImageVector
  get() {
    if (_triangle48 != null) {
      return _triangle48!!
    }
    _triangle48 = fluentIcon(name = "Regular.Triangle48", 48f) {
      materialPath {
          moveTo(25.758F, 8.435F)
          curveToRelative(-0.652F, -1.239F, -2.422F, -1.249F, -3.088F, -0.017F)
          lineTo(6.717F, 37.919F)
          curveToRelative(-0.63F, 1.166F, 0.213F, 2.583F, 1.539F, 2.583F)
          horizontalLineToRelative(31.487F)
          curveToRelative(1.318F, 0.0F, 2.163F, -1.4F, 1.549F, -2.566F)
          lineTo(25.758F, 8.435F)
          close()
          moveToRelative(-5.287F, -1.207F)
          curveToRelative(1.617F, -2.99F, 5.916F, -2.966F, 7.5F, 0.042F)
          lineToRelative(15.533F, 29.502F)
          curveToRelative(1.49F, 2.83F, -0.562F, 6.23F, -3.76F, 6.23F)
          horizontalLineTo(8.255F)
          curveToRelative(-3.22F, 0.0F, -5.27F, -3.44F, -3.738F, -6.272F)
          lineTo(20.47F, 7.228F)
          close()        
      }
    }
    return _triangle48!!
  }

private var _triangle48: ImageVector? = null
