package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleLeft16: ImageVector
  get() {
    if (_chevronDoubleLeft16 != null) {
      return _chevronDoubleLeft16!!
    }
    _chevronDoubleLeft16 = fluentIcon(name = "Regular.ChevronDoubleLeft16", 16f) {
      materialPath {
          moveTo(8.354F, 12.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.195F, -0.196F, 0.511F, -0.196F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(4.207F, 8.0F)
          lineToRelative(4.147F, 4.146F)
          close()
          moveToRelative(4.0F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(8.207F, 8.0F)
          lineToRelative(4.147F, 4.146F)
          close()        
      }
    }
    return _chevronDoubleLeft16!!
  }

private var _chevronDoubleLeft16: ImageVector? = null
