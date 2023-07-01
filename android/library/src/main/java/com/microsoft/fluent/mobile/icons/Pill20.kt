package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pill20: ImageVector
  get() {
    if (_pill20 != null) {
      return _pill20!!
    }
    _pill20 = fluentIcon(name = "Filled.Pill20", 20f) {
      materialPath {
          moveTo(11.147F, 3.147F)
          curveToRelative(1.576F, -1.576F, 4.131F, -1.576F, 5.707F, 0.0F)
          curveToRelative(1.576F, 1.576F, 1.576F, 4.131F, 0.0F, 5.707F)
          lineToRelative(-8.0F, 8.0F)
          curveToRelative(-1.576F, 1.576F, -4.131F, 1.576F, -5.707F, 0.0F)
          curveToRelative(-1.576F, -1.576F, -1.576F, -4.131F, 0.0F, -5.707F)
          lineToRelative(8.0F, -8.0F)
          close()
          moveToRelative(5.0F, 0.707F)
          curveToRelative(-1.186F, -1.186F, -3.108F, -1.186F, -4.293F, 0.0F)
          lineTo(8.208F, 7.5F)
          lineToRelative(4.292F, 4.293F)
          lineToRelative(3.647F, -3.646F)
          curveToRelative(1.185F, -1.186F, 1.185F, -3.108F, 0.0F, -4.293F)
          close()
          moveTo(8.854F, 14.147F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.357F, 0.357F, -0.936F, 0.357F, -1.293F, 0.0F)
          curveTo(5.264F, 15.557F, 5.14F, 15.5F, 5.0F, 15.5F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.223F, -0.5F, 0.5F)
          curveToRelative(0.0F, 0.14F, 0.058F, 0.265F, 0.15F, 0.356F)
          curveToRelative(0.748F, 0.745F, 1.958F, 0.744F, 2.704F, -0.003F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          close()        
      }
    }
    return _pill20!!
  }

private var _pill20: ImageVector? = null
