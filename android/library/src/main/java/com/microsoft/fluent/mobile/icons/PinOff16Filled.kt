package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff16: ImageVector
  get() {
    if (_pinOff16 != null) {
      return _pinOff16!!
    }
    _pinOff16 = fluentIcon(name = "Filled.PinOff16", 16f) {
      materialPath {
          moveTo(9.56F, 10.267F)
          lineToRelative(4.586F, 4.587F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-13.0F, -13.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(4.586F, 4.585F)
          lineToRelative(-0.08F, 0.15F)
          lineToRelative(-2.81F, 0.937F)
          curveToRelative(-0.164F, 0.054F, -0.289F, 0.19F, -0.329F, 0.36F)
          curveToRelative(-0.04F, 0.168F, 0.01F, 0.345F, 0.134F, 0.468F)
          lineTo(4.793F, 10.5F)
          lineToRelative(-2.647F, 2.646F)
          lineTo(2.0F, 14.0F)
          lineToRelative(0.853F, -0.146F)
          lineTo(5.5F, 11.207F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.123F, 0.122F, 0.3F, 0.172F, 0.469F, 0.133F)
          curveToRelative(0.168F, -0.04F, 0.304F, -0.165F, 0.36F, -0.329F)
          lineToRelative(0.936F, -2.811F)
          lineToRelative(0.15F, -0.08F)
          close()
          moveToRelative(3.63F, -1.943F)
          lineToRelative(-1.788F, 0.957F)
          lineToRelative(-4.686F, -4.687F)
          lineToRelative(0.957F, -1.796F)
          curveToRelative(0.474F, -0.89F, 1.674F, -1.067F, 2.386F, -0.353F)
          lineToRelative(3.485F, 3.498F)
          curveToRelative(0.71F, 0.712F, 0.532F, 1.907F, -0.354F, 2.381F)
          close()        
      }
    }
    return _pinOff16!!
  }

private var _pinOff16: ImageVector? = null
