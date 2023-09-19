package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleLeft48: ImageVector
  get() {
    if (_triangleLeft48 != null) {
      return _triangleLeft48!!
    }
    _triangleLeft48 = fluentIcon(name = "Regular.TriangleLeft48", 48f) {
      materialPath {
          moveTo(8.435F, 22.241F)
          curveToRelative(-1.239F, 0.652F, -1.249F, 2.422F, -0.017F, 3.088F)
          lineToRelative(29.501F, 15.954F)
          curveToRelative(1.166F, 0.63F, 2.583F, -0.214F, 2.583F, -1.54F)
          verticalLineTo(8.256F)
          curveToRelative(0.0F, -1.317F, -1.4F, -2.162F, -2.566F, -1.549F)
          lineTo(8.435F, 22.241F)
          close()
          moveToRelative(-1.207F, 5.287F)
          curveToRelative(-2.99F, -1.617F, -2.966F, -5.915F, 0.042F, -7.499F)
          lineTo(36.772F, 4.495F)
          curveToRelative(2.83F, -1.49F, 6.23F, 0.562F, 6.23F, 3.76F)
          verticalLineToRelative(31.488F)
          curveToRelative(0.0F, 3.22F, -3.44F, 5.27F, -6.272F, 3.739F)
          lineTo(7.228F, 27.528F)
          close()        
      }
    }
    return _triangleLeft48!!
  }

private var _triangleLeft48: ImageVector? = null
