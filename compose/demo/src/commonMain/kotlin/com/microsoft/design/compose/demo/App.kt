package com.microsoft.design.compose.demo

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Card
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import com.microsoft.design.compose.demo.theme.AppTheme
import com.microsoft.design.compose.icons.Res
import com.microsoft.design.compose.icons.allDrawableResources
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource

@Composable
internal fun App() = AppTheme {
    val allIcons: List<Map.Entry<String, DrawableResource>> = remember {
        Res.allDrawableResources.entries.filter { it.key.contains("24") }.sortedBy { it.key }
    }
    val (selectedIcon, setSelectedIcon) = remember { mutableStateOf<Map.Entry<String, DrawableResource>?>(null) }

    LazyVerticalGrid(
        columns = GridCells.Adaptive(80.dp),
        modifier = Modifier.fillMaxSize(),
        contentPadding = WindowInsets.safeDrawing.asPaddingValues(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        items(allIcons.size) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                modifier = Modifier.clickable {
                    setSelectedIcon(allIcons[it])
                }
            ) {
                Icon(
                    modifier = Modifier.padding(8.dp).size(48.dp),
                    painter = painterResource(allIcons[it].value),
                    contentDescription = allIcons[it].key,
                )
                Text(
                    modifier = Modifier.padding(8.dp),
                    maxLines = 1,
                    text = allIcons[it].key.removePrefix("ic_fluent_")
                )
            }
        }
    }

    if (selectedIcon != null) {
        Dialog(
            onDismissRequest = { setSelectedIcon(null) }
        ) {
            Card {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Icon(
                        modifier = Modifier.padding(8.dp).size(48.dp),
                        painter = painterResource(selectedIcon.value),
                        contentDescription = selectedIcon.key,
                    )
                    SelectionContainer {
                        Text(
                            modifier = Modifier.padding(8.dp),
                            text = selectedIcon.key
                        )
                    }
                }
            }
        }
    }
}
