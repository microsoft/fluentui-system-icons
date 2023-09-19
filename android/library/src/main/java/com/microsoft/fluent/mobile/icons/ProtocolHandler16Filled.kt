package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ProtocolHandler16: ImageVector
  get() {
    if (_protocolHandler16 != null) {
      return _protocolHandler16!!
    }
    _protocolHandler16 = fluentIcon(name = "Filled.ProtocolHandler16", 16f) {
      materialPath {
          moveTo(3.586F, 4.414F)
          lineTo(1.413F, 6.585F)
          curveToRelative(-0.781F, 0.782F, -0.781F, 2.048F, 0.0F, 2.829F)
          lineToRelative(2.171F, 2.171F)
          curveToRelative(0.782F, 0.781F, 2.048F, 0.781F, 2.829F, 0.0F)
          lineToRelative(2.171F, -2.171F)
          curveToRelative(0.781F, -0.781F, 0.781F, -2.047F, 0.0F, -2.829F)
          lineToRelative(-2.169F, -2.17F)
          curveToRelative(-0.781F, -0.781F, -2.047F, -0.781F, -2.828F, 0.0F)
          close()
          moveToRelative(6.0F, 7.171F)
          lineToRelative(-0.88F, -0.878F)
          lineToRelative(0.587F, -0.586F)
          curveToRelative(1.171F, -1.172F, 1.171F, -3.071F, 0.0F, -4.243F)
          lineTo(8.707F, 5.293F)
          lineToRelative(0.878F, -0.88F)
          curveToRelative(0.781F, -0.78F, 2.048F, -0.78F, 2.829F, 0.0F)
          lineToRelative(2.171F, 2.172F)
          curveToRelative(0.781F, 0.782F, 0.781F, 2.048F, 0.0F, 2.829F)
          lineToRelative(-2.171F, 2.171F)
          curveToRelative(-0.781F, 0.781F, -2.047F, 0.781F, -2.829F, 0.0F)
          close()        
      }
    }
    return _protocolHandler16!!
  }

private var _protocolHandler16: ImageVector? = null
