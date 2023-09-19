package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleUp20: ImageVector
  get() {
    if (_chevronDoubleUp20 != null) {
      return _chevronDoubleUp20!!
    }
    _chevronDoubleUp20 = fluentIcon(name = "Regular.ChevronDoubleUp20", 20f) {
      materialPath {
          moveTo(4.146F, 9.646F)
          curveTo(3.95F, 9.842F, 3.95F, 10.158F, 4.147F, 10.353F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, -0.001F)
          lineTo(10.0F, 5.187F)
          lineToRelative(5.146F, 5.165F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.001F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.001F, -0.707F)
          lineTo(10.39F, 4.162F)
          curveToRelative(-0.215F, -0.216F, -0.565F, -0.216F, -0.78F, 0.0F)
          lineTo(4.146F, 9.646F)
          close()
          moveToRelative(0.0F, 5.001F)
          curveTo(3.95F, 14.843F, 3.95F, 15.16F, 4.147F, 15.354F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, -0.001F)
          lineTo(10.0F, 10.188F)
          lineToRelative(5.146F, 5.165F)
          curveToRelative(0.195F, 0.196F, 0.511F, 0.196F, 0.707F, 0.001F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.001F, -0.707F)
          lineTo(10.39F, 9.163F)
          curveToRelative(-0.215F, -0.216F, -0.565F, -0.216F, -0.78F, 0.0F)
          lineToRelative(-5.464F, 5.484F)
          close()        
      }
    }
    return _chevronDoubleUp20!!
  }

private var _chevronDoubleUp20: ImageVector? = null
