package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDoubleUp20: ImageVector
  get() {
    if (_chevronDoubleUp20 != null) {
      return _chevronDoubleUp20!!
    }
    _chevronDoubleUp20 = fluentIcon(name = "Filled.ChevronDoubleUp20", 20f) {
      materialPath {
          moveTo(4.207F, 15.267F)
          curveToRelative(-0.286F, -0.3F, -0.274F, -0.774F, 0.026F, -1.06F)
          lineToRelative(5.25F, -5.002F)
          curveToRelative(0.29F, -0.275F, 0.745F, -0.275F, 1.034F, 0.0F)
          lineToRelative(5.25F, 5.002F)
          curveToRelative(0.3F, 0.286F, 0.312F, 0.76F, 0.026F, 1.06F)
          curveToRelative(-0.286F, 0.3F, -0.76F, 0.312F, -1.06F, 0.026F)
          lineTo(10.0F, 10.784F)
          lineToRelative(-4.733F, 4.51F)
          curveToRelative(-0.3F, 0.285F, -0.774F, 0.273F, -1.06F, -0.027F)
          close()
          moveToRelative(0.0F, -4.998F)
          curveToRelative(-0.286F, -0.3F, -0.274F, -0.775F, 0.026F, -1.06F)
          lineToRelative(5.25F, -5.002F)
          curveToRelative(0.29F, -0.276F, 0.745F, -0.276F, 1.034F, 0.0F)
          lineToRelative(5.25F, 5.001F)
          curveToRelative(0.3F, 0.286F, 0.312F, 0.76F, 0.026F, 1.06F)
          curveToRelative(-0.286F, 0.3F, -0.76F, 0.312F, -1.06F, 0.026F)
          lineTo(10.0F, 5.786F)
          lineToRelative(-4.733F, 4.508F)
          curveToRelative(-0.3F, 0.286F, -0.774F, 0.275F, -1.06F, -0.025F)
          close()        
      }
    }
    return _chevronDoubleUp20!!
  }

private var _chevronDoubleUp20: ImageVector? = null
