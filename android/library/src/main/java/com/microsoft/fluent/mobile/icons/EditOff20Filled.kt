package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EditOff20: ImageVector
  get() {
    if (_editOff20 != null) {
      return _editOff20!!
    }
    _editOff20 = fluentIcon(name = "Filled.EditOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(7.543F, 8.25F)
          lineToRelative(-3.998F, 3.998F)
          curveTo(3.218F, 12.575F, 2.99F, 12.99F, 2.89F, 13.442F)
          lineToRelative(-0.878F, 3.95F)
          curveToRelative(-0.037F, 0.167F, 0.014F, 0.341F, 0.135F, 0.462F)
          curveToRelative(0.12F, 0.121F, 0.295F, 0.172F, 0.462F, 0.135F)
          lineToRelative(3.926F, -0.873F)
          curveToRelative(0.467F, -0.104F, 0.896F, -0.34F, 1.234F, -0.678F)
          lineToRelative(3.981F, -3.98F)
          lineToRelative(5.396F, 5.396F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(12.898F, 6.31F)
          lineToRelative(-2.587F, 2.586F)
          lineToRelative(-4.207F, -4.207F)
          lineToRelative(2.587F, -2.587F)
          lineToRelative(4.207F, 4.207F)
          close()
          moveToRelative(-2.83F, -5.584F)
          curveToRelative(1.182F, -1.182F, 3.106F, -1.158F, 4.258F, 0.054F)
          curveToRelative(1.112F, 1.17F, 1.09F, 3.012F, -0.052F, 4.153F)
          lineToRelative(-0.669F, 0.669F)
          lineToRelative(-4.207F, -4.207F)
          lineToRelative(0.67F, -0.669F)
          close()        
      }
    }
    return _editOff20!!
  }

private var _editOff20: ImageVector? = null
