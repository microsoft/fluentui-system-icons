package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlugConnected20: ImageVector
  get() {
    if (_plugConnected20 != null) {
      return _plugConnected20!!
    }
    _plugConnected20 = fluentIcon(name = "Filled.PlugConnected20", 20f) {
      materialPath {
          moveTo(17.78F, 3.28F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-2.446F, 2.445F)
          curveToRelative(-1.571F, -1.074F, -3.733F, -0.913F, -5.128F, 0.481F)
          lineToRelative(-0.3F, 0.3F)
          curveToRelative(-0.582F, 0.582F, -0.582F, 1.526F, 0.0F, 2.108F)
          lineToRelative(3.6F, 3.6F)
          curveToRelative(0.582F, 0.581F, 1.525F, 0.581F, 2.107F, 0.0F)
          lineToRelative(0.3F, -0.3F)
          curveToRelative(1.395F, -1.395F, 1.555F, -3.557F, 0.482F, -5.128F)
          lineTo(17.78F, 3.28F)
          close()
          moveTo(7.554F, 8.846F)
          curveToRelative(-0.582F, -0.581F, -1.525F, -0.581F, -2.107F, 0.0F)
          lineToRelative(-0.3F, 0.3F)
          curveToRelative(-1.395F, 1.395F, -1.555F, 3.557F, -0.482F, 5.128F)
          lineTo(2.22F, 16.72F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineToRelative(2.446F, -2.446F)
          curveToRelative(1.571F, 1.075F, 3.733F, 0.914F, 5.128F, -0.48F)
          lineToRelative(0.3F, -0.3F)
          curveToRelative(0.582F, -0.582F, 0.582F, -1.526F, 0.0F, -2.108F)
          lineToRelative(-3.6F, -3.6F)
          close()        
      }
    }
    return _plugConnected20!!
  }

private var _plugConnected20: ImageVector? = null
