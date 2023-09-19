package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TriangleDown48: ImageVector
  get() {
    if (_triangleDown48 != null) {
      return _triangleDown48!!
    }
    _triangleDown48 = fluentIcon(name = "Regular.TriangleDown48", 48f) {
      materialPath {
          moveTo(22.241F, 39.566F)
          curveToRelative(0.652F, 1.238F, 2.422F, 1.248F, 3.088F, 0.017F)
          lineToRelative(15.954F, -29.502F)
          curveToRelative(0.63F, -1.165F, -0.214F, -2.582F, -1.54F, -2.582F)
          horizontalLineTo(8.256F)
          curveToRelative(-1.317F, 0.0F, -2.162F, 1.4F, -1.549F, 2.565F)
          lineToRelative(15.534F, 29.502F)
          close()
          moveToRelative(5.287F, 1.206F)
          curveToRelative(-1.617F, 2.99F, -5.915F, 2.966F, -7.499F, -0.041F)
          lineTo(4.495F, 11.229F)
          curveTo(3.005F, 8.4F, 5.057F, 5.0F, 8.255F, 5.0F)
          horizontalLineToRelative(31.488F)
          curveToRelative(3.22F, 0.0F, 5.27F, 3.44F, 3.739F, 6.272F)
          lineToRelative(-15.954F, 29.5F)
          close()        
      }
    }
    return _triangleDown48!!
  }

private var _triangleDown48: ImageVector? = null
