package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LocationOff16: ImageVector
  get() {
    if (_locationOff16 != null) {
      return _locationOff16!!
    }
    _locationOff16 = fluentIcon(name = "Filled.LocationOff16", 16f) {
      materialPath {
          moveTo(11.582F, 12.289F)
          lineToRelative(2.564F, 2.565F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(2.99F, 3.696F)
          curveTo(2.364F, 4.644F, 2.0F, 5.78F, 2.0F, 7.0F)
          curveToRelative(0.0F, 2.867F, 1.935F, 5.506F, 5.732F, 7.922F)
          curveToRelative(0.163F, 0.104F, 0.373F, 0.104F, 0.536F, 0.0F)
          curveToRelative(1.336F, -0.85F, 2.442F, -1.728F, 3.313F, -2.633F)
          close()
          moveTo(8.274F, 8.98F)
          curveTo(8.184F, 8.994F, 8.093F, 9.0F, 8.0F, 9.0F)
          curveTo(6.895F, 9.0F, 6.0F, 8.105F, 6.0F, 7.0F)
          curveToRelative(0.0F, -0.093F, 0.006F, -0.185F, 0.019F, -0.274F)
          lineTo(8.274F, 8.98F)
          close()
          moveTo(10.0F, 7.0F)
          curveToRelative(0.0F, 0.26F, -0.05F, 0.51F, -0.14F, 0.738F)
          lineToRelative(2.98F, 2.98F)
          curveTo(13.611F, 9.526F, 14.0F, 8.286F, 14.0F, 7.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          curveToRelative(-1.371F, 0.0F, -2.635F, 0.46F, -3.645F, 1.234F)
          lineTo(7.262F, 5.14F)
          curveTo(7.49F, 5.05F, 7.739F, 5.0F, 8.0F, 5.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          close()        
      }
    }
    return _locationOff16!!
  }

private var _locationOff16: ImageVector? = null
