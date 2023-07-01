package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Premium32: ImageVector
  get() {
    if (_premium32 != null) {
      return _premium32!!
    }
    _premium32 = fluentIcon(name = "Filled.Premium32", 32f) {
      materialPath {
          moveTo(7.0F, 4.0F)
          curveTo(6.52F, 4.0F, 6.084F, 4.274F, 5.875F, 4.706F)
          lineToRelative(-3.75F, 7.75F)
          curveToRelative(-0.211F, 0.436F, -0.151F, 0.954F, 0.154F, 1.33F)
          lineToRelative(12.75F, 15.75F)
          curveTo(15.266F, 29.83F, 15.623F, 30.0F, 16.0F, 30.0F)
          reflectiveCurveToRelative(0.734F, -0.17F, 0.972F, -0.463F)
          lineToRelative(12.75F, -15.75F)
          curveToRelative(0.304F, -0.377F, 0.364F, -0.896F, 0.153F, -1.332F)
          lineToRelative(-3.75F, -7.75F)
          curveTo(25.916F, 4.276F, 25.48F, 4.0F, 25.0F, 4.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(-1.636F, 7.5F)
          lineToRelative(2.42F, -5.0F)
          horizontalLineToRelative(3.688F)
          lineToRelative(-1.563F, 5.0F)
          horizontalLineTo(5.364F)
          close()
          moveTo(5.668F, 14.0F)
          horizontalLineToRelative(4.098F)
          lineToRelative(2.868F, 8.606F)
          lineTo(5.668F, 14.0F)
          close()
          moveToRelative(6.733F, 0.0F)
          horizontalLineToRelative(7.198F)
          lineTo(16.0F, 24.797F)
          lineTo(12.401F, 14.0F)
          close()
          moveToRelative(9.833F, 0.0F)
          horizontalLineToRelative(4.098F)
          lineToRelative(-6.966F, 8.606F)
          lineTo(22.234F, 14.0F)
          close()
          moveToRelative(4.402F, -2.5F)
          horizontalLineTo(22.09F)
          lineToRelative(-1.563F, -5.0F)
          horizontalLineToRelative(3.688F)
          lineToRelative(2.42F, 5.0F)
          close()
          moveToRelative(-7.164F, 0.0F)
          horizontalLineToRelative(-6.944F)
          lineToRelative(1.563F, -5.0F)
          horizontalLineToRelative(3.818F)
          lineToRelative(1.563F, 5.0F)
          close()        
      }
    }
    return _premium32!!
  }

private var _premium32: ImageVector? = null
