package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pill20: ImageVector
  get() {
    if (_pill20 != null) {
      return _pill20!!
    }
    _pill20 = fluentIcon(name = "Regular.Pill20", 20f) {
      materialPath {
          moveTo(8.854F, 13.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          curveTo(6.608F, 16.1F, 5.4F, 16.102F, 4.651F, 15.358F)
          curveTo(4.558F, 15.267F, 4.5F, 15.14F, 4.5F, 15.0F)
          curveToRelative(0.0F, -0.277F, 0.223F, -0.5F, 0.5F, -0.5F)
          curveToRelative(0.138F, 0.0F, 0.263F, 0.056F, 0.353F, 0.146F)
          curveToRelative(0.357F, 0.357F, 0.936F, 0.357F, 1.293F, 0.0F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()
          moveToRelative(2.293F, -10.0F)
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
          moveTo(11.793F, 12.5F)
          lineTo(7.5F, 8.207F)
          lineToRelative(-3.646F, 3.647F)
          curveToRelative(-1.186F, 1.185F, -1.186F, 3.107F, 0.0F, 4.293F)
          curveToRelative(1.185F, 1.185F, 3.107F, 1.185F, 4.293F, 0.0F)
          lineToRelative(3.646F, -3.647F)
          close()        
      }
    }
    return _pill20!!
  }

private var _pill20: ImageVector? = null
